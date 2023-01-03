import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { StatsComponent } from './views/stats/stats.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactIndexComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    StatsComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ChartComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
