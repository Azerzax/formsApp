import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ){
  }

  public myForm = this.fb.group({
    name:['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email:['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    username:['', [Validators.required, this.validatorsService.cantBeNigga]],
    password:['', [Validators.required, Validators.minLength(8)]],
    password2:['', [Validators.required]]
  })

  isValidField(field:string){
    return this.validatorsService.isValidField(this.myForm, field);
  }

  public onSave(){
    this.myForm.markAllAsTouched();
  }

}
