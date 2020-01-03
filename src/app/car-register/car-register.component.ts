import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.component.html',
  styleUrls: ['./car-register.component.scss']
})
export class CarRegisterComponent implements OnInit {
  carEditForm = this.fb.group({
    carMake: [''],
    carModel: [''],
    dealerAddress: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  }
  // , {updateOn: 'blur'}
  );
  // carEditFormGroup = new FormGroup({
  //   carMake = new FormControl(''),
  //   carModel = new FormControl(''),
  // });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  /**
   * Get error message if email field has invalid values.
   */
  saveCar() {
    // TODO: Use EventEmitter with form value
    console.warn(this.carEditForm.value);
  }

}
