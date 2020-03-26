import { Component, OnInit } from "@angular/core";
import { Data } from "../MockData";
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-manager",
  templateUrl: "./manager.component.html",
  styleUrls: ["./manager.component.css"]
})
export class ManagerComponent implements OnInit {
  products: Product[];
  selected: Product;
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(Data => {
      this.products = Data;
    });
  }
  removeItem(id) {
    // console.log(id);
    this.productService.removeProduct(id).subscribe(reporn => {
      this.products = this.products.filter(product => product.id != id);
    });
    // this.products = this.products.filter(product => product.id != id);
  }
}
