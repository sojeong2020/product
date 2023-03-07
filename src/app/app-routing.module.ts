import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionsComponent } from './feature/productions/productions.component';

const routes: Routes = [

    {path:'index', component: ProductionsComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }