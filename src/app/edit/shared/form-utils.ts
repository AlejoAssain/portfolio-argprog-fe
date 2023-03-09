import { FormGroup } from "@angular/forms"


/**
  * Function to extract only the values with the 'dirty' properties. Means the ones that has been changed
*/
export function getDirtyValues(form: FormGroup) : {[key: string]: any} {
  const formValues = form.getRawValue();
  const dirtyValues = Object.keys(form.controls)
    .filter(key => form.controls[key].dirty)
    .reduce((obj: {[key: string]: any}, key) => {
      obj[key] = formValues[key];
      return obj
    }, {});

  return dirtyValues;
}
