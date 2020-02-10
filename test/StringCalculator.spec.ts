import StringCalculator from '../src/StringCalculator';

describe('StringCalculator', () => {

  const calculator = new StringCalculator();

  describe('add', () => {

    it('return 0 on empty input', () => {
      const input = '';

      const result = calculator.add(input);

      expect(result).toEqual(0);
    });

    it('return same number when only 1 is given', () => {
      const input = '1';

      const result = calculator.add(input);

      expect(result).toEqual(1);
    });

    it('return addition result when 2 numbers are given', () => {
      const input = '1,2';

      const result = calculator.add(input);

      expect(result).toEqual(3);
    });

    it('return addition result when 3 numbers are given', () => {
      const input = '1,2,3';

      const result = calculator.add(input);

      expect(result).toEqual(6);
    });

    it('fails when more than 3 numbers are given', () => {
      const input = '1,2,3,4';

      let result: number = 0;
      try {
        result = calculator.add(input);
      } catch (e) {
        expect(e.message).toEqual('Number of input elements cannot exceed 3');
        expect(result).toBe(0);
      }
    });

  });

})