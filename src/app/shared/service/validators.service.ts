import { FormGroup, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FormControl, } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {


  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)' ;
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$' ;

  public cantBeNigga = (control:FormControl): ValidationErrors | null => {
    const value:string = control.value.trim().toLowerCase();

    if (value === 'nigga') {
      return{
        noNigga:true
      }
    }
    return null;
  }

  public isValidField( form: FormGroup, field: string){
    return form.controls[field].errors
      && form.controls[field].touched;
  }

}
