import { Category } from './../model/category.model';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingService } from '../loading.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  list:Product[];

  category$;

  constructor(private service:ProductService,
              private categoryService:CategoryService,
              private loading:LoadingService ) { 
                this.category$=categoryService.getCategories();
                  
              }

  ngOnInit() {
    this.loading.loading();
    this.service.getProducts().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Product;
      })
      this.loading.hideLoading();
    });
    
  }

}
