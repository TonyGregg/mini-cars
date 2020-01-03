import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarRegisterComponent } from './car-register/car-register.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CarLayoutModule } from './layout/car-layout/car-layout.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { MaterialModule } from './shared/material/material.module';
import { TrialAnimationComponent } from './trial-animation/trial-animation.component';
import { RestictedCarNameDirective } from './shared/resticted-car-name.directive';






@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CarDetailComponent,
    HomeComponent,
    CarListComponent,
    NotFoundComponent,
    CarouselComponent,
    CarFilterPipe,
    ContactUsComponent,
    TrialAnimationComponent,
    CarRegisterComponent,
    RestictedCarNameDirective
      ],
  imports: [
    BrowserModule,
    CarLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
