import express from "express";
import { accountRestController } from "../account/account.module";

const app = express();

app.get("/bank/:operation", async (request, response) => {

  const { operation } = request.params;

  switch (operation) {
    case "create-account":
      try {
        const { account } = await accountRestController.create(request.query);

        response.end(JSON.stringify(account));
      } catch (e) {
        if (e instanceof Error) {
          response.end(e.message);
        }
      }
      break;

    case "deposit":
      try {
        const { account } = await accountRestController.deposit(request.query);

        response.end(JSON.stringify(account));
      } catch (e) {
        if (e instanceof Error) {
          response.end(e.message);
        }
      }
      break;

    case "withdraw":
      try {
        const { account } = await accountRestController.withdraw(request.query);

        response.end(JSON.stringify(account));
      } catch (e) {
        if (e instanceof Error) {
          response.end(e.message);
        }
      }
      break;
  }

});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});