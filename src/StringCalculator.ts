export default class StringCalculator {
  /**
   * Simulates addition on numbers given on input.
   * @param input 0, 1 or 2 numbers connected via string
   * @return result of addition
   * @throws Error on incorrect input
   */
  public add(input: String): number {
    if (!input) {
      return 0;
    }
    const numbers: number[] = input.split(',').map(s => parseInt(s.trim()));
    if (numbers.length > 3) {
      throw new Error('Number of input elements cannot exceed 3');
    }
    return numbers.reduce((prev, next) => prev + next);
  }
}