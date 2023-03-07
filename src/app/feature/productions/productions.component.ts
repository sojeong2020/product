import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Production } from 'src/app/core/model';

@Component({
  selector: 'app-productions',
  templateUrl: './productions.component.html',
  styleUrls: ['./productions.component.css']
})
export class ProductionsComponent implements OnInit {

  productions?: Production[];
  productLen?:number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProducts()
    .subscribe( (response) =>{ 
     this.productions = response.data
     this.productLen = response.data.length
    }
    )
  }

}
