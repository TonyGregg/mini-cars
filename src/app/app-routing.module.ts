import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarRegisterComponent } from './car-register/car-register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrialAnimationComponent } from './trial-animation/trial-animation.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'contact', component: ContactUsComponent
  },
  {
    path: 'list', component: CarListComponent
  },
  {
    path: 'car/:carId', component: CarDetailComponent
  },
  {
    path: 'animate', component: TrialAnimationComponent
  },
  {
    path: 'register', component: CarRegisterComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
