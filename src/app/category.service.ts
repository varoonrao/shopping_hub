import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    constructor(private db:AngularFirestore,
      private db2:AngularFireDatabase){
  }

  getCategories(){
    return this.db2.list('categories').snapshotChanges();
  }

}