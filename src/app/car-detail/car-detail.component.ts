import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../model/car';
import { CarType } from '../model/car-type';
import { CarService } from '../shared/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  car: Car = new Car(1, 'Dummy' , new CarType(3, 300, 400, 'Lux'));
  constructor( private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit() {
    console.log('inside ngOnInit of car show. ');
    const carId = this.route.snapshot.params.carId;
    console.log('inside ngOnInit of car show. Car Id passed :: ' + carId);
    this.carService.getCar(carId).subscribe(returnedCar => {
      console.log('Returned car ' + returnedCar);
      this.car = returnedCar;
    });
    console.log('Returned car ' + this.car.carType);
  }

}
