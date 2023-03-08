import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';
import { Subscription } from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCount?: number;
  
  obs!: Subscription;

  constructor(private cartService: CartService) { 
  
  }

  ngOnInit(): void {
    this.obs = this.cartService.getCartObservable()
    .subscribe(response => {
      this.cartCount = response.totalCount
    })
  }

  ngOnDestroy(){
    this.obs.unsubscribe();
  }



}
