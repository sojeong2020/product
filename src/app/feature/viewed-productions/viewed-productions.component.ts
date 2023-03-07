import { Component, OnInit } from '@angular/core';
import { Production } from 'src/app/core/model';

@Component({
  selector: 'app-viewed-productions',
  templateUrl: './viewed-productions.component.html',
  styleUrls: ['./viewed-productions.component.css']
})
export class ViewedProductionsComponent implements OnInit {

  viewedProductions?: Production[];

  constructor() { }

  ngOnInit(): void {
  }

}
