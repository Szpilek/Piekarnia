import { Component } from '@angular/core';
import { NavigationService } from './navigation.service'
import { Page } from "./Page";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: Page;
  constructor(private navigationService: NavigationService) {
    console.log(navigationService);
    navigationService.getCurrentPage().subscribe(value => {
      this.currentPage = value;
    })
  }

  changePage(page: string): void {
    this.navigationService.changePage(page);
  }
  isCurrentPageMain(): boolean {
    return this.currentPage == Page.MAIN;
  }
  isCurrentPageHistory(): boolean {
    return this.currentPage == Page.HISTORY;
  }
  isCurrentPageAbout(): boolean {
    return this.currentPage == Page.ABOUT;
  }

  isCurrentPageContact(): boolean {
    return this.currentPage == Page.CONTACT;
  }

  isCurrentPageBreads(): boolean {
    return this.currentPage == Page.BREADS;
  }
}
