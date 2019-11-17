import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Product } from '../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatFormFieldAppearance, MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  })
export class AdminProductsComponent implements OnInit {

  
  
  constructor(public service:ProductService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  formData:Product;

  ngOnInit() {
    this.resetForm();

  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      title: '',
      price: null,
      category: '',
      imageUrl: '',
    }
  }
 
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('products').add(data);
    else
      this.firestore.doc('products/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Success !!', 'Product Added');

  }
 

}
