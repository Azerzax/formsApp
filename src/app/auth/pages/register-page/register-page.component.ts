import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  constructor(private fb: FormBuilder){
  }

  public myForm = this.fb.group({
    name:['', [Validators.required]],
    email:['', [Validators.required]],
    username:['', [Validators.required]],
    password:['', [Validators.required]],
    password2:['', [Validators.required]]
  })

  isValidField(field:string){
    //como estamos usando mucho esta funcion y podria cambiar mas adelante, vamos a modularizarla para tenerla en un unico lugar y poder hacer la llamada a la funcion
  }

  public onSave(){
    this.myForm.markAllAsTouched();
  }

}
