import { Component, OnInit } from '@angular/core';
import {Bread} from '../Bread';
import {NutritionDetail} from '../NutritionDetail';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  genericNutritionDetails: NutritionDetail[]= [
    {key:"Wartości odżywcze",value:"w 100g"},
    {key: "Wartość energetyczna",value:"238kcal"},
    {key: "Węglowodany",value:"50g"},
    {key: "Tłuszcz",value:"2g"},
    {key: "Białko",value:"6g"}
  ]

  breads: Bread[] = [
    {name: "Babuni", price: 5, nutritionDetails: this.genericNutritionDetails},
    {name: "Żytni", price: 5, nutritionDetails: this.genericNutritionDetails},
    {name: "Letni", price: 5, nutritionDetails: this.genericNutritionDetails},
    {name: "Przedwiosenny", price: 5, nutritionDetails: this.genericNutritionDetails},
    {name: "Wiosenny", price: 5, nutritionDetails: this.genericNutritionDetails},
    {name: "Powiosenny", price: 5, nutritionDetails: this.genericNutritionDetails},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
