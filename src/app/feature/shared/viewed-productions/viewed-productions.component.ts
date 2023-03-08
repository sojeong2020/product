import { Component, OnInit } from '@angular/core';
import { ViewedItemService } from 'src/app/core/viewedItem.service';
import { Production } from 'src/app/core/model';

@Component({
  selector: 'app-viewed-productions',
  templateUrl: './viewed-productions.component.html',
  styleUrls: ['./viewed-productions.component.css']
})
export class ViewedProductionsComponent implements OnInit {

  displayedColumns: string[] = ['picture','name', 'brandName', 'colour'];
  dataSource: Production[]=[];

  constructor(private viewedItemService: ViewedItemService) { }

  ngOnInit(): void {
    this.dataSource = this.viewedItemService.getView();
    console.log(this.dataSource,"this.viewedItems")
  }

}
