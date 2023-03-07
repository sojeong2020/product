import { Injectable } from '@angular/core';
import { Observable , Subject} from 'rxjs';
import { Result, Production } from './model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    prodCount = 0;

    prodCountCountChange: Subject<number> = new Subject<number>();
    
    UpdateCount(count: number) {
        this.prodCount = count;
        this.prodCountCountChange.next(this.prodCount);
      }
  
}