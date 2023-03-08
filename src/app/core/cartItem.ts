import { Production } from "./model";

export class CartItem {

    constructor(public production: Production){}

    quantity: number = 1;
    price: number = Number(this.production.price.amount);

}