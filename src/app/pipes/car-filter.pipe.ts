import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model/car';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(cars: Car[], carType: string): Car[] {
    if (carType === '*' || carType === '') {
      return cars;
    }
    return cars.filter(car => car.carType.category === carType);
  }

}
