import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    
    pageTitle: string = 'Product List!!!';
    imageWidth: number = 40;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _listFilter: string;
    filteredProducts: IProduct[];
    errorMessage: string;

    constructor(private productService: ProductService) {
    }

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this._listFilter? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[] = [];

      toggleImage(): void {
          this.showImage = !this.showImage;
      }

      ngOnInit(): void {
          console.log('In ngOnInit');
          this.productService.getProducts().subscribe({
              next: products => {
                  this.products = products,
                  this.filteredProducts = this.products;
              },
              error: err => this.errorMessage = err
          });
      }

      performFilter(listFilter: string): IProduct[] {
        let filterBy = listFilter.toLocaleLowerCase();
        return this.products.filter( (p: IProduct) => p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(messge:string) : void {
        this.pageTitle = 'Product List: ' + messge;
    }
}