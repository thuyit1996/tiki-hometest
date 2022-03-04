import { inputErrorMessage } from '../src/components/GenerateInput/helper';

describe('Test inputErrorMessage', () => {

  it("Should be return error when input won't convert to number", () => {
    expect(inputErrorMessage('abc')).toEqual("Please input the number only")
  });

  it("Should be return error when input not in (1,10)", () => {
    expect(inputErrorMessage('999')).toEqual("Please input number from 1 to 10 will be better for UI");
  });

  it('Should return empty if input is valid', () => {
    expect(inputErrorMessage('5')).toEqual('');
  })

});