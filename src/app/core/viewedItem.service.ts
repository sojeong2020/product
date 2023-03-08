import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result, Production } from './model';

@Injectable({
  providedIn: 'root'
})
export class ViewedItemService {

viewedItems: Production[]=[];

view(production: Production){
  let viewProduct = this.viewedItems.find(item => item.id == production.id);
  if(viewProduct)
  return;

    this.viewedItems.push(production);
}

getView(){
    return this.viewedItems;
}
   
  
}