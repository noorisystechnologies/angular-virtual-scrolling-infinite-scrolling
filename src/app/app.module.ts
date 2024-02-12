import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteScrollingGridComponent } from './infinite-scrolling-grid/infinite-scrolling-grid.component';
import { VirtualScrollingGridComponent } from './virtual-scrolling-grid/virtual-scrolling-grid.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DynamicPropertyPipe } from './dynamic-property.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollingGridComponent,
    VirtualScrollingGridComponent,
    DynamicPropertyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
