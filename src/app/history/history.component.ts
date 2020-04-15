import { Component, OnInit } from '@angular/core';
import { Event } from '../Event'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  events: Event[] = [
    { name: "Otwarcie pierwszej piekarni", date: new Date("1890-03-25"), description: "Otworzono pierwszą piekarnię przy placu Konstytucji. Sprzedawano pieczywo z mąki pełnoziarnistej z lokalnego młyna, które cieszyło się ogromną popularnością." },
    { name: "Zmiana lokalizacji", date: new Date("1960-05-15"), description: "Nasza piekarnia rozrosła się i postanowiono przenieść się do nowej lokalizacji, w której znajduje się obecnie. Poprzedni budynek okazał się być za mały na rosnące zainteresowanie wyrobami Piekarni pod Kłosem Żyta." },
    { name: "Rozszerzenie oferty o certyfikowane produkty Bio", date: new Date("2000-12-05"), description: "Nasze produkty otrzymały certyfikat jakości Bio dzięki czemu nasi klienci mogą cieszyć się świeżym bio pieczywem." },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
