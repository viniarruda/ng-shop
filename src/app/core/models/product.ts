import {Item} from './item';
import {Gallery} from './gallery';

export class Product {
  category: Number;
  brand: String;
  format: String;
  nextPage: String;
  totalPages: Number;
  items: Item[];

  // Single Product
  itemId: Number;
  name: String;
  shortDescription: String;
  largeImage: String;
  color: String;
  offerType: String;
  stock: String;
  modelNumber: String;
  availableOnline: Boolean;
  imageEntities: Gallery[];
}
