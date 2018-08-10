import {Item} from './item';
import {Gallery} from './gallery';
import {Cart} from './cart';

export class Product {
  category: Number;
  brand: String;
  format: String;
  nextPage: String;
  totalPages: Number;
  items: Item[];

  cart: Cart[];
  // Single Product
  itemId: Number;
  name: String;
  salePrice: number;
  shortDescription: String;
  largeImage: String;
  color: String;
  offerType: String;
  stock: String;
  modelNumber: String;
  availableOnline: Boolean;
  imageEntities: Gallery[];
}
