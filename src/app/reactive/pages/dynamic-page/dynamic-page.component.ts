import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  constructor(private fb: FormBuilder){

  }

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Pokemon red', Validators.required],
      ['Ghost of sparta', Validators.required],

    ])
  })

  /*
  public myForm2: FormGroup = new FormGroup({
    favoriteGames: new FormArray([])
  })
  Esta seria  otra forma de crear el favoriteGames, pero la otra es mejor*/

  onSubmit():void {
    if (this.myForm.invalid) {
      this.myForm.invalid;
      return;
    }

    console.log(this.myForm.value)

  }

  get favorites() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField(field: string): boolean | null{
    return this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
  }

  isValidFieldInArray(formArray: FormArray, index: number){
    return formArray.controls[index].errors &&
    formArray.controls[index].touched
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

}
