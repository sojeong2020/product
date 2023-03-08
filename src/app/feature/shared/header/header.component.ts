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
  
  constructor(private cartService: CartService) { 
  
  }

  ngOnInit(): void {
  }

  itemCount(){
    return  this.cartService.itemCount();
  }

}
