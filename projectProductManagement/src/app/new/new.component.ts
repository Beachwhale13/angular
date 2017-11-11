import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from './../product';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewComponent implements OnInit {
  product: Product = new Product();
  products: Array<Product>;

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {
    this._productService.productsObservable.subscribe((products)=>{
      this.products = products;
    })
   }

  ngOnInit() {
    this.product = new Product();
  }
  onSubmit(){
    // console.log(this.product);
    this.products.push(this.product);
    this._productService.updateProducts(this.products);
    // console.log(this.products);
    this.product = new Product();
    this._router.navigate(['products']);
  }

}
