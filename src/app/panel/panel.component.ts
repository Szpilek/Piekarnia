import { Component, OnInit } from '@angular/core';
import {Bread} from '../Bread';
import {NutritionDetail} from '../NutritionDetail';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  babuniNutritionDetails: NutritionDetail[]= [
    {key:"Wartości odżywcze",value:"w 100g"},
    {key: "Wartość energetyczna",value:"238kcal"},
    {key: "Węglowodany",value:"50g"},
    {key: "Tłuszcz",value:"2g"},
    {key: "Białko",value:"6g"}
  ]

  zytniNutritionDetails: NutritionDetail[]= [
    {key:"Wartości odżywcze",value:"w 100g"},
    {key: "Wartość energetyczna",value:"270kcal"},
    {key: "Węglowodany",value:"64g"},
    {key: "Tłuszcz",value:"1g"},
    {key: "Białko",value:"8g"}
  ]

  wloskiNutritionDetails: NutritionDetail[]= [
    {key:"Wartości odżywcze",value:"w 100g"},
    {key: "Wartość energetyczna",value:"245kcal"},
    {key: "Węglowodany",value:"60g"},
    {key: "Tłuszcz",value:"2g"},
    {key: "Białko",value:"7g"}
  ]

  bioNutritionDetails: NutritionDetail[]= [
    {key:"Wartości odżywcze",value:"w 100g"},
    {key: "Wartość energetyczna",value:"220kcal"},
    {key: "Węglowodany",value:"48g"},
    {key: "Tłuszcz",value:"2g"},
    {key: "Białko",value:"5g"}
  ]

  wiosennyNutritionDetails: NutritionDetail[]= [
    {key:"Wartości odżywcze",value:"w 100g"},
    {key: "Wartość energetyczna",value:"255kcal"},
    {key: "Węglowodany",value:"52g"},
    {key: "Tłuszcz",value:"1g"},
    {key: "Białko",value:"7g"}
  ]

  wiejskiNutritionDetails: NutritionDetail[]= [
    {key:"Wartości odżywcze",value:"w 100g"},
    {key: "Wartość energetyczna",value:"246kcal"},
    {key: "Węglowodany",value:"53g"},
    {key: "Tłuszcz",value:"1g"},
    {key: "Białko",value:"7g"}
  ]

  breads: Bread[] = [
    {name: "Babuni", price: 6, nutritionDetails: this.babuniNutritionDetails, description: "Chleb z mąki pszennej na zakwasie żytnim, lorem ipsum donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."},
    {name: "Żytni", price: 5, nutritionDetails: this.zytniNutritionDetails, description: "Chleb wypiekany z żytniej mąki pełnoziarnistej z dodatkiem miodu, lorem ipsum donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."},
    {name: "Włoski", price: 10, nutritionDetails: this.wloskiNutritionDetails, description: "Włoskie pieczywo prosto z naszej piekarni, posiada certyfikat jakości bio, lorem ipsum donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."},
    {name: "Bio", price: 10, nutritionDetails: this.bioNutritionDetails, description: "Chleb z mąki bio z certyfikatem jakości, lorem ipsum donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."},
    {name: "Wiosenny", price: 3, nutritionDetails: this.wiosennyNutritionDetails, description: "Pyszny chleb na zakwasie pszennym z dodatkiem maślanki, lorem ipsum donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."},
    {name: "Wiejski", price: 4, nutritionDetails: this.wiejskiNutritionDetails, description: "Stworzony na podstawie tradycyjnych receptur, lorem ipsum donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
