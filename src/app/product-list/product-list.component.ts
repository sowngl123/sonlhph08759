import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  product : Product = {
    name: 'i team 1',
    price: 24.24,
    desc: 'nội dung sp',
    img: 'http://placehold.it/700x400',
    status: false
  }
  changeStatus(){
    this.product.status = !this.product.status;
  }
  changeTitle(e){
    this.product.name = e.target.value;
  }

}