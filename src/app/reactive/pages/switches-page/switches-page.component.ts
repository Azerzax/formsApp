import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {

  constructor( private fb: FormBuilder){

  }

  public myForm: FormGroup = this.fb.group({
    gender: ['F', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  })

  isValidField(field: string): boolean | null{
    return this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
  }

  onSave(){
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }else{
      console.log(this.myForm.value);
    }
  }

}
