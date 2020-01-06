import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
// import { ProductService } from './products.service';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    PageNotFoundComponent,
    MainComponent,
    DetailsComponent,
    CheckoutComponent,
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    // FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
