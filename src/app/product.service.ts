import { Product } from './model/product.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  formData:Product;

  constructor(private firestore: AngularFirestore) { }

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }
}
