import { Component, OnInit } from '@angular/core';
import { Data } from '../MockData';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {


  products : Product[];
  selected : Product;
  constructor(
    private productService: ProductService
  ) {
    console.log('constructor')
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.products = this.productService.getProducts();
  }
  // removeItem(id){
  //   this.products = this.productService.removeProduct(id);
  // }

  showdetai(product) {
    this.selected = product;
  }
  removeItem(id) {
    this.products = this.products.filter(product => product.id != id);
  }
}
