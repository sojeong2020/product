import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';
import { Production } from 'src/app/core/model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

displayedColumns: string[] = ['picture','name', 'brandName', 'colour','stockStatus','price','delete'];
dataSource: Production[]=[];
totalPrice?:number;

  constructor(private cartService: CartService ) { }

  ngOnInit(): void {
    this.dataSource = this.cartService.getItems()
    console.log(this.dataSource,"cartitems")
  }

  delete(id:string){
  console.log(id,"id")
    this.dataSource = this.dataSource.filter(item => item.id !== id)
  
  }
total(){
  
}

}
