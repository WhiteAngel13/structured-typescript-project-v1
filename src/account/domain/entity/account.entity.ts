import { AccountData } from "./account.entity.data";

export class Account {
  constructor(private data: AccountData) {}

  get id() {
    return this.data.id;
  }

  get nickname() {
    return this.data.nickname;
  }

  get balance() {
    return this.data.balance;
  }

  updateBalance (value:number) {
    this.data.balance = value;
}

  toJSON(): AccountData {
    return this.data;
  }
}
