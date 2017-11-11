import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from './../product';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {
  products: Array<Product>;
  product: Product;
  selected: number;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router
  ) {
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    });

    this.selected = parseInt(this._route.snapshot.paramMap.get('id'));
    console.log(this.selected);
    this._route.params
      .subscribe( param => {
      for (let idx = 0; idx < this.products.length; idx++) {
        if (this.products[idx].id == this.selected) {
          this.product = this.products[idx];
          break;
    }
  }
});
   }

  ngOnInit() {

  }
  onUpdate(){
    console.log(this.product);
    this._productService.updateProducts(this.products);
    console.log(this.products);
    this._router.navigate(['products']);
  }
  deleteProduct(product){
    var idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
    this._productService.updateProducts(this.products);
    this._router.navigate(['products']);
  }

}
