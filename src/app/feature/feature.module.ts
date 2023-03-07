import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionsComponent } from './productions/productions.component';
import { ProductionDetailsComponent } from './production-details/production-details.component';
import { ViewedProductionsComponent } from './viewed-productions/viewed-productions.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './shared/header/header.component';
import { AngularMaterialModule } from './shared/angular-material.module';

@NgModule({
  declarations: [
    ProductionsComponent,
    ProductionDetailsComponent,
    ViewedProductionsComponent,
    CartComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ]
})
export class FeatureModule { }
