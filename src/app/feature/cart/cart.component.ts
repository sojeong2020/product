import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';
import { Cart } from 'src/app/core/cart';
import { CartItem } from 'src/app/core/cartItem';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProductions?: CartItem[]=[]

  cart?:Cart;

  totalPrice?:any;

  obs!: Subscription;

  constructor(private cartService: CartService ) { }

  ngOnInit(): void {
    this.obs = this.cartService.getCartObservable()
    .subscribe(response =>{
      this.cartProductions = response.items;
      this.totalPrice = response.totalPrice;

    })

  }

  delete(id:string){
    this.cartService.removeFromCart(id)
  } 

  clear(){
    this.cartService.clearCart()
  }

  ngOnDestroy(){
    this.obs.unsubscribe();
  }


}
