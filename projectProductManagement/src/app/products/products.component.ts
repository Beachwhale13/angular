import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.productsObservable.subscribe( (products) =>{
      this.products = products;
    });
  }
  deleteProduct(product){
    var idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
    this._productService.updateProducts(this.products);
  }

}
