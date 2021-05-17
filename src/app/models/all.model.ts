import { ShellModel } from '../shell/data-store';

export class cartModel extends ShellModel {
    _id: string; 
    productId: string;
    productName: string;
    desc: string;
    imageUrl: string;
    price: string;
    weight: string;
    qty: string;
    constructor() {
        super();
    }
}
export class xModel extends ShellModel {
    _id: string;
    slide1: string;
    slide2: string;
    slide3: string;
    productId: string;
    productName: string;
    desc: string;
    prodcutCartImg: string;
    productImg: string;
    price: string;
    weight: string;
    qty: string;
    constructor() {
        super();
    }
}