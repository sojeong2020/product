import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionsComponent } from './feature/productions/productions.component';
import { ProductionDetailsComponent } from './feature/production-details/production-details.component';
import { CartComponent } from './feature/cart/cart.component';

const routes: Routes = [

    {path:'productions', component: ProductionsComponent},
    {path:'production/:id', component: ProductionDetailsComponent},
    {path:'cart', component: CartComponent},

    { path: '', redirectTo: 'productions', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }