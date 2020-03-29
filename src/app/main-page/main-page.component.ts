import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private navigationService: NavigationService) {
    console.log(navigationService);
  }

  changePage(page: string) {
    this.navigationService.changePage(page);
  }

  ngOnInit(): void {

  }

}
