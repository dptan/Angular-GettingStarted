import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: any;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private productService: ProductService) { 
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.getProduct(id);
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }
  
  onBack(): void {
    this.router.navigate(['/products']);
  }

}
