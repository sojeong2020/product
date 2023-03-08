import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Production } from 'src/app/core/model';
import { DataService } from 'src/app/core/data.service';
import { CartService } from 'src/app/core/cart.service';
import { ViewedItemService } from 'src/app/core/viewedItem.service';
import { Subscription } from "rxjs";


@Component({
  selector: 'app-production-details',
  templateUrl: './production-details.component.html',
  styleUrls: ['./production-details.component.css']
})
export class ProductionDetailsComponent implements OnInit {

  production?: Production;

  sizes?:[];

  cartCount!: number;

  cartItem?: Production[];

  viewdItems?:Production[];

  obs!: Subscription;


  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private cartService: CartService,
    private router: Router,
    private viewedItemService: ViewedItemService) { 
      
    }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct():void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id,"id")
 
    this.obs = this.dataService.getProducts()
    .subscribe( (response) =>{
      console.log(response.data)
      const production = response.data.find( p => p.id === id)
      this.production = production;
      this.sizes = this.production?.sizes;
      this.viewedItemService.view(production!)

    })
  }

  addToCart(production: Production){
    console.log(production,"production")
    this.cartService.addToCart(production);
    window.alert('Your product has been added to the cart!');
    this.router.navigateByUrl('/cart');
  }

  ngOnDestroy(){
    this.obs.unsubscribe();
  }

  
}
