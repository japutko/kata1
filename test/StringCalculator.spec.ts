import StringCalculator from '../src/StringCalculator';

describe('StringCalculator', () => {

  const calculator = new StringCalculator();

  describe('add', () => {

    it('should return 0', () => {
      const input = 'something';

      const result = calculator.add(input);

      expect(result).toEqual(0);
    })

  });

})