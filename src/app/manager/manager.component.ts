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
    this.productService.getProducts().subscribe(Data => {
      this.products = Data;
    })
  }
  removeItem(id) {
    this.products = this.products.filter(product => product.id != id);
  }
}
