import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionsComponent } from './productions/productions.component';
import { ProductionDetailsComponent } from './production-details/production-details.component';
import { ViewedProductionsComponent } from './viewed-productions/viewed-productions.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    ProductionsComponent,
    ProductionDetailsComponent,
    ViewedProductionsComponent,
    CartComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
