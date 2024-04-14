import { FormControl } from "@angular/forms";


export const cantBeNigga = (control:FormControl) => {
  const value:string = control.value.trim().toLowerCase();

  if (value === 'nigga') {
    return{
      noNigga:true
    }
  }
  return null;
}
