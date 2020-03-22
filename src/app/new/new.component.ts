import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { NewService } from '../new.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  selected: Product;
  products: Product[];

  constructor(
    private newService: NewService
  ) { 

  }

  ngOnInit(): void {
    this.getProducts();
  }
 
  getProducts(){
   this.newService.getProducts().subscribe(data => {
     this.products = data;
    });
  }

}