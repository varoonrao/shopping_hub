import { LoadingService } from './loading.service';

import {MatSortModule} from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatChipsModule} from '@angular/material/chips';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './core/auth.guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CategoryService } from './category.service';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule} from '@angular/material';
import { ProductService } from './product.service';
import { ButtonsModule,InputsModule, WavesModule, NavbarModule, CollapseModule } from 'angular-bootstrap-md';
import { AdminLandingComponent} from './admin/admin-landing/admin-landing.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminProductsListComponent } from './admin/admin-products-list/admin-products-list.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';




@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminProductsListComponent,
    AdminLandingComponent,
    MainNavComponent,
    
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    MatChipsModule,
    MatIconModule,
    NavbarModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(
      {
        timeOut:5000,
        positionClass: 'toast-bottom-left',
        preventDuplicates: true,
      }
    ),
    ButtonsModule,
    InputsModule,

    AppRoutingModule,AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireModule,
    NgbModule,
    
    MatButtonModule, MatCheckboxModule,
    RouterModule.forRoot([
      {path : '', component: ProductsComponent},
      {path : 'products', component: ProductsComponent},
      {path : 'shopping-cart', component: ShoppingCartComponent},
      {path : 'check-out', component: CheckOutComponent,  canActivate: [AuthGuard]},
      {path : 'order-success', component: OrderSuccessComponent,  canActivate: [AuthGuard]},
      {path : 'login', component: LoginComponent},
      {path : 'my/orders', component: MyOrdersComponent,  canActivate: [AuthGuard]},
      {path : 'admin/products', component: AdminLandingComponent,  canActivate: [AuthGuard]},
      
      {path : 'admin/orders', component: AdminOrdersComponent,  canActivate: [AuthGuard]},

    ]),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],    
  providers: [
    AuthService,
    AuthGuard,
    CategoryService,
    ProductService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
