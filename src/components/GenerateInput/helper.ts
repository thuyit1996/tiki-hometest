export const inputErrorMessage = (value: string) => {
  if (isNaN(Number(value))) {
    return "Please input the number only";
  }
  if (Number(value) < 1 || Number(value) > 10) {
    return "Please input number from 1 to 10 will be better for UI";
  }
  return "";
};
