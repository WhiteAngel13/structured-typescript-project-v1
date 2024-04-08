/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Express } from 'express';
import 'reflect-metadata';

type GenericClass<T = any> = new (...args: any[]) => T;

const Injectable = () => {
  return (target: GenericClass) => {
    Reflect.defineMetadata('milson.injectable', true, target);
  };
};

const Controller = () => {
  return (target: GenericClass) => {
    Reflect.defineMetadata('milson.controller', true, target);
    Reflect.defineMetadata('milson.injectable', true, target);
  };
};

const Get = (path: string) => {
  return (target: any, property: any) => {
    // console.log(target, property);
    Reflect.defineMetadata('milson.route.path.get', path, target, property);
  };
};

type IsRouteResponse = { path: string; type: 'GET' };

const isRoute = (
  target: GenericClass,
  propertyName: string,
): IsRouteResponse | undefined => {
  const getPath = Reflect.getMetadata(
    'milson.route.path.get',
    target.prototype,
    propertyName,
  );

  if (getPath) {
    return { path: getPath, type: 'GET' };
  }
};

@Injectable()
class Repository {
  execute() {
    console.log('executando repository');
  }
}

@Injectable()
class Service {
  constructor(private readonly repository: Repository) {}

  execute() {
    console.log('executando service');
    this.repository.execute();
  }
}

@Controller()
class AccountController {
  constructor(private readonly service: Service) {}

  @Get('/account')
  async getAccount() {
    console.log('executando controller');
    this.service.execute();
  }
}

const providers = [Repository, Service];
const controllers = [AccountController];

const salveModule = {
  providers,
  controllers,
};

const getInstanceOf = (
  target: GenericClass,
  instances: Map<string, object>,
): void => {
  if (instances.has(target.name)) return;

  const isInjectable = Reflect.getMetadata('milson.injectable', target);

  if (!isInjectable) throw new Error('não é injectable');

  const dependenciesRefs = Reflect.getMetadata('design:paramtypes', target);

  if (!dependenciesRefs || dependenciesRefs.length === 0) {
    instances.set(target.name, new target());
    return;
  }

  const dependenciesInstances = dependenciesRefs.map((dependencyRef: any) => {
    getInstanceOf(dependencyRef, instances);
    return instances.get(dependencyRef.name);
  });

  instances.set(target.name, new target(...dependenciesInstances));
};

const getInstanceOfController = (
  target: GenericClass,
  instances: Map<string, object>,
  app: Express,
) => {
  getInstanceOf(target, instances);

  const controllerInstance = instances.get(target.name);
  if (!controllerInstance) throw new Error('something wrong');

  const propertyNames = Object.getOwnPropertyNames(target.prototype).filter(
    (value) => value !== 'constructor',
  );

  propertyNames.forEach((propertyName) => {
    const route = isRoute(target, propertyName);
    if (!route) return;

    if (route.type === 'GET') {
      app.get(
        route.path,
        //@ts-ignore
        controllerInstance[propertyName].bind(controllerInstance),
      );
    }
  });
};

const create = (module: {
  providers: Array<GenericClass>;
  controllers: Array<GenericClass>;
}) => {
  const app = express();

  const instances = new Map<string, object>();

  module.providers.forEach((provider) => {
    getInstanceOf(provider, instances);
  });

  module.controllers.forEach((controller) => {
    getInstanceOfController(controller, instances, app);
  });

  return {
    get: <T>(classRef: GenericClass<T>): T => {
      return instances.get(classRef.name) as T;
    },
    listen: app.listen.bind(app),
    express: app,
  };
};

const app = create(salveModule);

app.listen(3000, () => {
  console.log('app running');
});
