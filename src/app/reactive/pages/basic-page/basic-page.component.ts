import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx6090 = {
  name: 'RTX 6090',
  price: 2500,
  inStorage: 7,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent  implements OnInit{

  constructor(
    private fb: FormBuilder
  )
  {

  }

  ngOnInit(): void {
    this.myForm.reset(rtx6090); // Se pueden indicar los campos que se quieren rellenar al hacer el reseteo con un objeto
  }

  isValidField(field: string): boolean | null{
    return this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
  }

  getFieldError(field: string): string | null{
    if(!this.myForm.controls[field]){
      return null;
    }
    const errors = this.myForm.controls[field].errors || {};

    for(const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;
      }
    }

    return null;

  }

  /*

  public myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0),
  })

  de esta forma se repite deemasiado el codigo new FormControl()

  */

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]
  })

  onSave():void{
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched //esto hace que al darle al save y haya sido invalido el form salten los errores que no saltan por defecto porque estan esperando a que el form este en touched
      return
    }else{
      console.log(this.myForm.value);
    }

    //this.myForm.reset(); formatear el formulario del todo

    this.myForm.reset({price:10, inStorage:0})
  }

}
