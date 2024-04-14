import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  constructor(private fb: FormBuilder){
  }

  public myForm = this.fb.group({
    name:['', [Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
    email:['', [Validators.required, Validators.pattern(customValidators.emailPattern)]],
    username:['', [Validators.required, customValidators.cantBeNigga]],
    password:['', [Validators.required, Validators.minLength(8)]],
    password2:['', [Validators.required]]
  })

  isValidField(field:string){
    //como estamos usando mucho esta funcion y podria cambiar mas adelante, vamos a modularizarla para tenerla en un unico lugar y poder hacer la llamada a la funcion
  }

  public onSave(){
    this.myForm.markAllAsTouched();
  }

}
