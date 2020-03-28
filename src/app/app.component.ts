import { Component } from '@angular/core';

enum Page {
  BREADS,
  HISTORY,
  ABOUT,
  CONTACT,
  MAIN

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piekarnia';
  currentPage: Page = Page.MAIN;
  changePage(page: string) {
    switch (page) {
      case 'breads':
        this.currentPage = Page.BREADS;
        break;
      case 'history':
        this.currentPage = Page.HISTORY;
        break;
      case 'contact':
        this.currentPage = Page.CONTACT;
        break;
      case 'about':
        this.currentPage = Page.ABOUT;
        break;
      case 'main':
        this.currentPage = Page.MAIN;
        break;
      default:
        this.currentPage = Page.MAIN;
        break;
    }
  }

  isCurrentPageMain() {
    return this.currentPage == Page.MAIN;
  }

  isCurrentPageBreads() {
    return this.currentPage == Page.BREADS;
  }

  isCurrentPageHistory() {
    return this.currentPage == Page.HISTORY;
  }

  isCurrentPageContact() {
    return this.currentPage == Page.CONTACT;
  }

  isCurrentPageAbout() {
    return this.currentPage == Page.ABOUT;
  }


}
