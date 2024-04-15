import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {


  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors|null>((subscriber)=>{
      console.log({email});
      if (email==='imran@gmail.com') {
        subscriber.next({emailTaken:true});
      }else{
        subscriber.next(null);
      }
      subscriber.complete();
    }).pipe(
      delay(2000)
    )

    return httpCallObservable;


  }

  public isFieldOneEqualFieldTwo(field1: string, field2:string){
    return(formgroup:FormGroup): ValidationErrors | null => { // esta linea es la que hace el deprecated en formgroup en register component
      const fieldValue1 = formgroup.get(field1)?.value;
      const fieldValue2 = formgroup.get(field2)?.value;

      if(fieldValue1 !== fieldValue2){
        formgroup.get(field2)?.setErrors({
          notEqual: true
        });
        return {notEqual: true}
      }

      formgroup.get(field2)?.setErrors(null)
      return null;
    }
  }


  /*
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
  ESTO NO SE QUE ES LA VERDAD, ME LO HA PUESTO LA INTERFAZ ASYNCVALIDATOR DIRECTAMENTE*/

}
