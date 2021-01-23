import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';

@Component({
  selector: 'app-stock-item-component',
  templateUrl: './stock-item-component.component.html',
  styleUrls: ['./stock-item-component.component.css']
})
export class StockItemComponentComponent implements OnInit {

public stock: Stock;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Teste Stock Company', 'TSC', 85, 80);
  }

  toggleFavorite(event){
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }

}
