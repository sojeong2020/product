import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result, Production } from './model';

@Injectable({
  providedIn: 'root'
})
export class ViewedItemService {

viewedItems: Production[]=[];

view(production: Production){

    this.viewedItems.push(production);
}

getView(){
    return this.viewedItems;
}
   
  
}