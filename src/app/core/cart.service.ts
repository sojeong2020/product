import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject} from 'rxjs';
import { Result, Production } from './model';
import { Cart } from './cart';
import { CartItem } from './cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = this.getCartFromLocalStorage();

  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(production: Production): void {
    let cartItem = this.cart.items
      .find(item => item.production.id === production.id);
    if (cartItem)
      return;

    this.cart.items.push(new CartItem(production));
    this.setCartToLocalStorage();
  }

  removeFromCart(productionId: string): void {
    this.cart.items = this.cart.items
      .filter(item => item.production.id != productionId);
    this.setCartToLocalStorage();
  }

  changeQuantity(productionId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.production.id === productionId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.production.price.amount;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);

    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }


}
