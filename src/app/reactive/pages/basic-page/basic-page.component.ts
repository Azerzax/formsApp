import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

  constructor(
    private fb: FormBuilder
  )
  {

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
      return
    }else{
      console.log(this.myForm.value);
    }

  }

}
