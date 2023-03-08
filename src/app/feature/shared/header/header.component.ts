import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCount?: number;
  
  constructor(private cartService: CartService) { 
  
  }

  ngOnInit(): void {
    this.cartService.getCartObservable()
    .subscribe(response => {
      this.cartCount = response.totalCount
    })
  }


}
