import { StoreSummaryViewModel } from './store.model';
import { CategoryListModel } from './category.model';
import { AddressModel } from './user.model';

export interface ProductListModel {
  gallery?: string[];
  filters?: any[];
  _id: string;
  name?: string;
  slug?: string;
  description?: string;
  features?: string;
  storeData?: any;
  sku?: string;
  category?: CategoryListModel;
  store?: string;
  createdAt?: Date;
  updatedAt?: Date;
  price?: string;
  __v?: number;
}

export class ProductListResponseModel {
  error: boolean;
  message: string;
  data: ProductListModel[];
}

export interface ProductCategoryModel {
  _id: string;
  name: string;
  child?: ProductCategoryModel;
}

export const mockProducts: ProductListModel[] =
  // null;
  [
    {
      gallery: ['./assets/images/products/iphone6.png'],
      name: 'iphone6',
      price: '100000',
      _id: 'khadbhbadh',
    },
    {
      gallery: ['./assets/images/products/venus spray.png'],
      name: 'venus spray',
      price: '10000',
      _id: 'sdsjlshoshd',
    },
    {
      gallery: ['./assets/images/products/iphone11.png'],
      name: 'iphone11',
      price: '400000',
      _id: 'sdsjlshoshd',
    },
    {
      gallery: ['./assets/images/products/camera fujifilm xt10 mirrorless.png'],
      name: 'camera fujifilm xt10 mirrorless',
      price: '250000',
      _id: 'sdsjlshoshd',
    },
    {
      gallery: [
        './assets/images/products/liquid makeup and eye shadow pallettes.png',
      ],
      name: 'liquid makeup and eye shadow pallettes',
      price: '3000',
      _id: 'sdsjlshoshd',
    },
    {
      gallery: ['./assets/images/products/pink lipstick and blush on.png'],
      name: 'pink lipstick and blush on',
      price: '2000',
      _id: 'sdsjlshoshd',
    },
    {
      gallery: [
        './assets/images/products/three assorted colored venus matte lipsticks.png',
      ],
      name: 'three assorted colored venus matte lipsticks',
      price: '3000',
      _id: 'sdsjlshoshd',
    },
    {
      gallery: [
        './assets/images/products/white and brown wooden drawer cabinet.png',
      ],
      name: 'white and brown wooden drawer cabinet',
      price: '5000',
      _id: 'sdsjlshoshd',
    },
    {
      gallery: [
        './assets/images/products/liquid makeup and eye shadow pallettes.png',
      ],
      name: 'liquid makeup and eye shadow pallettes',
      price: '3000',
      _id: 'sdsjlshoshd',
    },
    {
      gallery: ['./assets/images/products/pink lipstick and blush on.png'],
      name: 'pink lipstick and blush on',
      price: '2000',
      _id: 'sdsjlshoshd',
    },
    {
      gallery: [
        './assets/images/products/three assorted colored venus matte lipsticks.png',
      ],
      name: 'three assorted colored venus matte lipsticks',
      price: '3000',
      _id: 'sdsjlshoshd',
    },
    {
      gallery: [
        './assets/images/products/white and brown wooden drawer cabinet.png',
      ],
      name: 'white and brown wooden drawer cabinet',
      price: '5000',
      _id: 'sdsjlshoshd',
    },
  ];

export const cartProducts: CartItems[] = null;

export interface OrderModel {
  productId: string;
  quantity: number;
}

export class CardModel {
  authorizationCode: string;
  bin: string;
  last4: string;
  expMonth: string;
  expYear: string;
  channel: string;
  cardType: string;
  bank: string;
  countryCode: string;
  brand: string;
  isDefault: boolean;
}
export class CartItems {
  _id: string;
  productId: string;
  sku?: string;
  productName: string;
  quantity: number;
  status?: string;
  imgUrl: string;
  unitPrice: string;
  features: string;
  storeName: string;
  count?: string;
  deal?: ProductDealModel;
  discount?: ProductDiscountModel;
}
export interface ProductDealModel {
  value: number;
  isPercent: boolean;
  desc: string;
  endDate: string;
  imgUrl: string;
}

export interface ProductDiscountModel {
  value: number;
  isPercent: boolean;
  startDate: string;
  endDate: string;
  status: string;
}

export class CartResponseModel {
  error: boolean;
  message: string;
  data: CartItems[];
}

export class UpdatePaymentModel {
  ref: string;
  scheme: string;
  amount: number;
  transferType: string;
  transferProvider: string;
  transactionData: {
    ref: string;
    account: string;
  };
  state: string;
}

export interface CartPaymentDataModel {
  shippingAddress: AddressModel;
  cartProducts: CartItems[];
  shippingType: string;
  totalQuantity: number;
  subTotal: number;
  shippingCost: number;
  taxCost: number;
  grandTotal: number;
  paymentMethod: string;
  _id?: string;
  cartExpiryDate?: Date;
  customer?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  confirmDate?: Date;
  trackNo?: string;
}

export interface CartPaymentDataResponseModel {
  error: boolean;
  message: string;
  data: CartPaymentDataModel;
}

export interface UpdateOrderModel {
  paymentMethod?: string;
  shippingType?: string;
  addressId?: string;
}

export interface OrdersResponseModel {
  error: false;
  message: 'success';
  data: OrderProductsModel[];
}

export interface OrderProductsModel {
  deal?: ProductDealModel;
  discount?: ProductDiscountModel;
  _id: string;
  productId: string;
  order: string;
  customer?: string;
  sku?: string;
  productName: string;
  imgUrl: string;
  quantity: number;
  unitPrice: number;
  features: string;
  store: string;
  storeName: string;
  status: string;
  __v?: number;
  statusChangeDate: Date;
}

export const mockOrderProducts: OrderProductsModel[] = [
  {
    imgUrl: './assets/images/products/iphone6.png',
    productName: 'iphone6',
    unitPrice: 100000,
    quantity: 1,
    _id: 'khadbhbadh',
    productId: '293ydgy86ag26geb',
    storeName: 'A store name',
    store: '5sjhkgui78oy2l',
    status: 'purchased',
    statusChangeDate: new Date(),
    features: 'just some features',
    order: '5awer987ythsdub',
  },
  {
    imgUrl: './assets/images/products/venus spray.png',
    productName: 'venus spray',
    unitPrice: 10000,
    quantity: 1,
    _id: 'sdsjlshoshd',
    productId: '293ydgy86ag26geb',
    storeName: 'A store name',
    store: '5sjhkgui78oy2l',
    status: 'purchased',
    statusChangeDate: new Date(),
    features: 'just some features',
    order: '5awer987ythsdub',
  },
  {
    imgUrl: './assets/images/products/iphone11.png',
    productName: 'iphone11',
    unitPrice: 400000,
    quantity: 1,
    _id: 'sdsjlshoshd',
    productId: '293ydgy86ag26geb',
    storeName: 'A store name',
    store: '5sjhkgui78oy2l',
    status: 'purchased',
    statusChangeDate: new Date(),
    features: 'just some features',
    order: '5awer987ythsdub',
  },
  {
    imgUrl: './assets/images/products/camera fujifilm xt10 mirrorless.png',
    productName: 'camera fujifilm xt10 mirrorless',
    unitPrice: 250000,
    quantity: 1,
    _id: 'sdsjlshoshd',
    productId: '293ydgy86ag26geb',
    storeName: 'A store name',
    store: '5sjhkgui78oy2l',
    status: 'purchased',
    statusChangeDate: new Date(),
    features: 'just some features',
    order: '5awer987ythsdub',
  },
  {
    imgUrl:
      './assets/images/products/liquid makeup and eye shadow pallettes.png',
    productName: 'liquid makeup and eye shadow pallettes',
    unitPrice: 3000,
    quantity: 1,
    _id: 'sdsjlshoshd',
    productId: '293ydgy86ag26geb',
    storeName: 'A store name',
    store: '5sjhkgui78oy2l',
    status: 'purchased',
    statusChangeDate: new Date(),
    features: 'just some features',
    order: '5awer987ythsdub',
  },
  {
    imgUrl: './assets/images/products/pink lipstick and blush on.png',
    productName: 'pink lipstick and blush on',
    unitPrice: 2000,
    quantity: 1,
    _id: 'sdsjlshoshd',
    productId: '293ydgy86ag26geb',
    storeName: 'A store name',
    store: '5sjhkgui78oy2l',
    status: 'purchased',
    statusChangeDate: new Date(),
    features: 'just some features',
    order: '5awer987ythsdub',
  },
  {
    imgUrl:
      './assets/images/products/three assorted colored venus matte lipsticks.png',
    productName: 'three assorted colored venus matte lipsticks',
    unitPrice: 3000,
    quantity: 1,
    _id: 'sdsjlshoshd',
    productId: '293ydgy86ag26geb',
    storeName: 'A store name',
    store: '5sjhkgui78oy2l',
    status: 'purchased',
    statusChangeDate: new Date(),
    features: 'just some features',
    order: '5awer987ythsdub',
  },
  {
    imgUrl:
      './assets/images/products/white and brown wooden drawer cabinet.png',
    productName: 'white and brown wooden drawer cabinet',
    unitPrice: 5000,
    quantity: 1,
    _id: 'sdsjlshoshd',
    productId: '293ydgy86ag26geb',
    storeName: 'A store name',
    store: '5sjhkgui78oy2l',
    status: 'purchased',
    statusChangeDate: new Date(),
    features: 'just some features',
    order: '5awer987ythsdub',
  },
  {
    imgUrl:
      './assets/images/products/liquid makeup and eye shadow pallettes.png',
    productName: 'liquid makeup and eye shadow pallettes',
    unitPrice: 3000,
    quantity: 1,
    _id: 'sdsjlshoshd',
    productId: '293ydgy86ag26geb',
    storeName: 'A store name',
    store: '5sjhkgui78oy2l',
    status: 'purchased',
    statusChangeDate: new Date(),
    features: 'just some features',
    order: '5awer987ythsdub',
  },
  {
    imgUrl: './assets/images/products/pink lipstick and blush on.png',
    productName: 'pink lipstick and blush on',
    unitPrice: 2000,
    quantity: 1,
    _id: 'sdsjlshoshd',
    productId: '293ydgy86ag26geb',
    storeName: 'A store name',
    store: '5sjhkgui78oy2l',
    status: 'purchased',
    statusChangeDate: new Date(),
    features: 'just some features',
    order: '5awer987ythsdub',
  },
  {
    imgUrl:
      './assets/images/products/three assorted colored venus matte lipsticks.png',
    productName: 'three assorted colored venus matte lipsticks',
    unitPrice: 3000,
    quantity: 1,
    _id: 'sdsjlshoshd',
    productId: '293ydgy86ag26geb',
    storeName: 'A store name',
    store: '5sjhkgui78oy2l',
    status: 'purchased',
    statusChangeDate: new Date(),
    features: 'just some features',
    order: '5awer987ythsdub',
  },
  {
    imgUrl:
      './assets/images/products/white and brown wooden drawer cabinet.png',
    productName: 'white and brown wooden drawer cabinet',
    unitPrice: 5000,
    quantity: 1,
    _id: 'sdsjlshoshd',
    productId: '293ydgy86ag26geb',
    storeName: 'A store name',
    store: '5sjhkgui78oy2l',
    status: 'purchased',
    statusChangeDate: new Date(),
    features: 'just some features',
    order: '5awer987ythsdub',
  },
];
