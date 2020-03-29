import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadCardComponent } from './bread-card/bread-card.component';
import { PanelComponent } from './panel/panel.component';
import { MapComponent } from './map/map.component';
import { HistoryComponent } from './history/history.component';
import { AboutComponent } from './about/about.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { StarComponent } from './star/star.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';


@NgModule({
  declarations: [
    AppComponent,
    BreadCardComponent,
    PanelComponent,
    MapComponent,
    HistoryComponent,
    AboutComponent,
    MainPageComponent,
    ContactComponent,
    StarComponent,
    TimelineItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
