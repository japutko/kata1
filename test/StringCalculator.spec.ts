import StringCalculator from '../src/StringCalculator';

describe('StringCalculator', () => {

  const calculator = new StringCalculator();

  describe('add', () => {

    function buildInput(separator: string, numbers: number[]): string {
      return `${separator}\n${numbers.join(separator)}`;
    }

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

    it('doesn\'t fail when more than 3 numbers are given', () => {
      const input = '1,2,3,4';

      const result = calculator.add(input);

      expect(result).toBe(10);
    });

    it('accept new line as number separator', () => {
      const input = '1,2\n3,4';

      const result = calculator.add(input);

      expect(result).toBe(10);
    });

    it('accept input with first line being separator', () => {
      const input = buildInput(';', [1,2,3,4]);

      const result = calculator.add(input);

      expect(result).toBe(10);
    });

    it('throw error when input contains negative number', () => {
      const input = buildInput(';', [1,-2,3,4]);

      expect(() => calculator.add(input)).toThrowError('Negatives not allowed: -2');
    });

    it('throw error when input contains negative numbers with all such named', () => {
      const input = buildInput(';', [1,-2,3,-4]);

      expect(() => calculator.add(input)).toThrowError('Negatives not allowed: -2,-4');
    });

    it('ignore numbers bigger then 1000', () => {
      const input = buildInput(';', [1,2,3,4,1001]);

      const result = calculator.add(input);

      expect(result).toBe(10);
    });

    it('accept input with first line being separator of any length', () => {
      const input = buildInput(';;;', [1,2,3,4]);

      const result = calculator.add(input);

      expect(result).toBe(10);
    });

  });

  describe('getCalledCount', () => {

    let calculator: StringCalculator;

    beforeEach(() => {
      calculator = new StringCalculator();
    });

    it('return number of add() method calls', () => {
      const times = 3;
      for(let i = 0; i < times; i++) {
        calculator.add('');
      }

      const calls = calculator.getCalledCount();

      expect(calls).toEqual(times);
    });

  });

});