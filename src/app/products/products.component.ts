import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { AddProductService } from '../add-product.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: Product[];
  addProductService: AddProductService;
  nom: FormControl;
  fournisseur: FormControl;
  age: FormControl;
  description: FormControl;
  prodForm: FormGroup;

  constructor(addProductService: AddProductService, fb: FormBuilder) {
    this.addProductService = addProductService;
    this.nom = fb.control('', Validators.required);
    this.fournisseur = fb.control('', Validators.required);
    this.age = fb.control('', Validators.required);
    this.description = fb.control('', Validators.required);
    this.prodForm = fb.group({
      nom: this.nom,
      fournisseur: this.fournisseur,
      age: this.age,
      description: this.description
    });
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.products = this.addProductService.getProducts();
  }

  delete(produit:Product){
    for (var i =0; i < this.products.length; i++)
      if (this.products[i].nom === produit.nom) {
        this.products.splice(i,1);
        break;
      }
  }

  add() {
    console.log(this.prodForm.value);
    this.products.push(new Product(this.prodForm.value.nom,this.prodForm.value.fournisseur,"",[],this.prodForm.value.description,this.prodForm.value.age,"",1));
    this.reset();
  }

  reset() {
    this.nom.setValue('');
    this.fournisseur.setValue('');
    this.age.setValue('');
    this.description.setValue('');
  }

}
