import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../product.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './../../model/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.css']
})
export class AdminProductsListComponent implements OnInit {

  list:Product[];
  constructor(private service: ProductService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
   this.service.getProducts().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Product;
      })
    });
  }

  onEdit(product: Product) {
    this.service.formData = Object.assign({}, product);
  }
 
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('products/' + id).delete();
      this.toastr.error('','🗑   Deleted !');
    }
  }
}












