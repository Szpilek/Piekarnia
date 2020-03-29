import { Injectable } from '@angular/core';
import {Page} from './Page'
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  title = 'piekarnia';
  private currentPage: BehaviorSubject<Page> = new BehaviorSubject<Page>(Page.MAIN);
  constructor() {
    console.log(this.currentPage);
    console.log("NAV SERVICE CREATED");
   }


  public changePage(page: string) {
    switch (page) {
      case 'breads':
        this.currentPage.next(Page.BREADS);
        break;
      case 'history':
        this.currentPage .next(Page.HISTORY);
        break;
      case 'contact':
        console.log(page);
        this.currentPage.next( Page.CONTACT);
        break;
      case 'about':
        this.currentPage.next(Page.ABOUT);
        break;
      case 'main':
        this.currentPage.next(Page.MAIN);
        break;
      default:
        this.currentPage.next(Page.MAIN);
        break;
    }
        console.log(this.currentPage);

  }

  getCurrentPage():Subject<Page> {
    return this.currentPage;
  } 



  // public isCurrentPageMain():boolean {
  //       console.log(this.currentPage);
  //       console.log(Page.MAIN);

  //   return this.currentPage === Page.MAIN;
  // }

  // isCurrentPageBreads():boolean {
  //   return this.currentPage === Page.BREADS;
  // }

  // isCurrentPageHistory():boolean {
  //   return this.currentPage === Page.HISTORY;
  // }

  // isCurrentPageContact():boolean {
  //   return this.currentPage === Page.CONTACT;
  // }

  // isCurrentPageAbout():boolean {
  //   return this.currentPage === Page.ABOUT;
  // }

}
