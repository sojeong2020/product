import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';
import { Production } from 'src/app/core/model';
import { Cart } from 'src/app/core/cart';
import { CartItem } from 'src/app/core/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProductions?: CartItem[]=[]

  cart?:Cart;

  totalPrice?:any;

  constructor(private cartService: CartService ) { }

  ngOnInit(): void {
    this.cartService.getCartObservable()
    .subscribe(response =>{
      console.log(response.items, "response form cart")
      this.cartProductions = response.items;
      this.totalPrice = response.totalPrice;
      console.log(this.totalPrice,"totalPrice")

    })

  }

  delete(id:string){
    this.cartService.removeFromCart(id)
  } 

  clear(){
    this.cartService.clearCart()
  }


}
