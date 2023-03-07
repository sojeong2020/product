import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Production } from 'src/app/core/model';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-production-details',
  templateUrl: './production-details.component.html',
  styleUrls: ['./production-details.component.css']
})
export class ProductionDetailsComponent implements OnInit {

  production?: Production;

  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct():void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id,"id")

    this.dataService.getProducts()
    .subscribe( (response) =>{
      console.log(response.data)
      const production = response.data.find( p => p.id === id)
      console.log(production)
      this.production = production;
    })
  }
}
