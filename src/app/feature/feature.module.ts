import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionsComponent } from './productions/productions.component';
import { ProductionDetailsComponent } from './production-details/production-details.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './shared/header/header.component';
import { ViewedProductionsComponent } from './shared/viewed-productions/viewed-productions.component';
import { AngularMaterialModule } from './shared/angular-material.module';

import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ProductionsComponent,
    ProductionDetailsComponent,
    CartComponent,
    HeaderComponent,
    ViewedProductionsComponent,
    
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    ProductionsComponent,
    ProductionDetailsComponent,
    CartComponent,
    HeaderComponent,
    ViewedProductionsComponent
  ]
})
export class FeatureModule { }
