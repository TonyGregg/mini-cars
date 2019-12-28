import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../model/car';
import { CarService } from '../shared/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars: Car[];

  constructor( private router: Router, private carService: CarService) { }

  ngOnInit() {
    console.log('Inside ngOnInit of Car List');
    this.carService.getAllCars().subscribe(returnedCars => {
      this.cars = returnedCars;
    });
  }
}
