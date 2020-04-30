export const inputValidation = (value: any) => {
  let isValid = true;
  for (const key in value) {
    if(value[key].trim().length === 0) {
      isValid = false
    } 
  }
  return isValid;
}