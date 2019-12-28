import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { MaterialModule } from './shared/material/material.module';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    CarDetailComponent,
    HomeComponent,
    CarListComponent,
    NotFoundComponent,
    CarouselComponent,
    CarFilterPipe  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
