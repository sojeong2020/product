import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Production } from 'src/app/core/model';
import { DataService } from 'src/app/core/data.service';
import { CartService } from 'src/app/core/cart.service';

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

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private cartService: CartService) { 
      this.cartService.prodCountCountChange.subscribe(count => {
        this.cartCount = count;
      });
    }

  ngOnInit(): void {
    this.getProduct()
    this.cartCount = this.cartService.prodCount;
  }

  getProduct():void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id,"id")

    this.dataService.getProducts()
    .subscribe( (response) =>{
      console.log(response.data)
      const production = response.data.find( p => p.id === id)
      this.production = production;
      this.sizes = this.production?.sizes;
      console.log(this.sizes,"sizes")
    })
  }

  addCount(){
    console.log("clicked add cart")
    this.cartCount++
    console.log(this.cartCount,"this.cartCount")
  }
}
