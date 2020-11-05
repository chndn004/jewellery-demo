import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products: any;

  constructor(private productsS: ProductService,) { }

  ngOnInit() {
    return this.productsS.getProducts().subscribe((data: any) => {
      if (undefined != data) {
        this.products=data;
      }
    });
  }

}
