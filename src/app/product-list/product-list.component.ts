import { Component, OnInit } from '@angular/core';
import { Data } from '../MockData';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


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
    this.productService.getProducts().subscribe(Data => {
      this.products = Data;
    })
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

  // product : Product = {
  //   name: 'i team 1',
  //   price: 24.24,
  //   desc: 'nội dung sp',
  //   img: 'http://placehold.it/700x400',
  //   status: false
  // }
  // changeStatus(){
  //   this.product.status = !this.product.status;
  // }
  // changeTitle(e){
  //   this.product.name = e.target.value;
  // }
}
