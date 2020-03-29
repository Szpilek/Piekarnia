import { Component } from '@angular/core';
import { NavigationService } from './navigation.service'
import { Page } from "./Page";
import { BreadCardComponent } from './bread-card/bread-card.component';
import { PanelComponent } from './panel/panel.component';
import { MapComponent } from './map/map.component';
import { HistoryComponent } from './history/history.component';
import { AboutComponent } from './about/about.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { StarComponent } from './star/star.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';

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
