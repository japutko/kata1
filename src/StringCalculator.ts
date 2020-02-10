export default class StringCalculator {
  /**
   * Simulates addition on numbers given on input.
   * @param input numbers connected via string separated by comma
   * @return result of addition
   * @throws Error on incorrect input
   */
  public add(input: String): number {
    if (!input) {
      return 0;
    }
    const numbers: number[] = input.split(',').map(s => parseInt(s.trim()));
    return numbers.reduce((prev, next) => prev + next);
  }
}