import { Injectable } from '@angular/core';
import { Observable , Subject} from 'rxjs';
import { Result, Production } from './model';

@Injectable({
  providedIn: 'root'
})
export class CartService {


    items: Production[]=[];

    
  
    addToCart(production: Production) {
        this.items.push(production);
      }
    
    getItems() {
        return this.items;
      }
    
    clearCart() {
        this.items = [];
        return this.items;
      }

    itemCount(){
        return this.items.length;
      }

    total(){
        if(this.itemCount.length !==0){
    let priceArr=[]
    this.items.map(item => {
        priceArr.push(item.price.amount)

        
    })
    

        }

    }

}
