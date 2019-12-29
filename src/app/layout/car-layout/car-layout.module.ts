import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarMiniLayoutComponent } from '../car-mini-layout/car-mini-layout.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [CarMiniLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [CarMiniLayoutComponent ]
})
export class CarLayoutModule { }
