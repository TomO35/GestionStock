import { Injectable } from '@angular/core';
import { Product, PRODUITS } from './product';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUITS;
  }
}
