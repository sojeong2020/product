import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';
import { Production } from 'src/app/core/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCount?: number;
  cartItem?: Production[];
  
  constructor(private cartService: CartService) { 
    this.cartService.prodCountCountChange.subscribe(count => {
      this.cartCount = count;
    });
  }

  ngOnInit(): void {
    this.cartCount = this.cartService.prodCount;
  }

}
