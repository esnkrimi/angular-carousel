import { NgModule } from '@angular/core';
import { EsnCarouselComponent } from './esn-carousel.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    EsnCarouselComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule
  ],
  exports: [
    EsnCarouselComponent
  ]
})
export class EsnCarouselModule { }
