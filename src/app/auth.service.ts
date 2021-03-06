import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
 
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

public user$: Observable<firebase.User>;

  constructor(
    private afAuth : AngularFireAuth,
    public route: ActivatedRoute, 
    public router : Router,
    private afs: AngularFirestore) { 
    this.user$ = afAuth.authState;
  

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )
 
    }

    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();

      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl',returnUrl);

      return this.oAuthLogin(provider);
    }
  
    private oAuthLogin(provider) {
      return this.afAuth.auth.signInWithPopup(provider)
        .then((credential) => {
          this.updateUserData(credential.user)
        })
    }

    private updateUserData(user) {
      // Sets user data to firestore on login
  
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  
      const data: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      }
  
      return userRef.set(data, { merge: true });
  
    }

    
  
  logout(){
    this.afAuth.auth.signOut();
  }
}

