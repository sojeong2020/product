import { Pipe, PipeTransform, OnInit } from '@angular/core';
//import { DataService } from 'src/app/core/data.service';
import { CartService } from 'src/app/core/cart.service';
import { Production } from 'src/app/core/model';

@Pipe({
  name: 'totalPricePipe',
  pure: false  // An impure pipe executes during every component change detection cycle called on keystroke or mouse-move
})
export class TotalPricePipe implements PipeTransform {

  totalItems :Production[]=[]
  totalPriceArr:any[]=[]

  constructor( private cartService: CartService){}

ngOnInit(): void {
/*    this.totalItems = this.cartService.getItems()
 */
}

transform(totalItems: Production[]): any {

    if(totalItems.length ==0){
       return 0
    }
    else{
        this.totalItems.map( item => { this.totalPriceArr?.push(item.price.amount)})

       // return this.totalPriceArr.reduce((pre,curr)=> pre + curr, 0)

       console.log(this.totalItems,"this.totalItems")

       console.log(this.totalPriceArr.reduce((pre,curr)=> pre + curr, 0),"total price")
    }

 
}  

}