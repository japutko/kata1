export default class StringCalculator {

  private callsCount = 0;

  /**
   * Returns total count of {@link add}
   * method calls on this instance.
   */
  public getCalledCount(): number {
    return this.callsCount;
  }

  /**
   * Simulates addition on numbers given on input.
   * @param input up to 3 numbers separated by comma or new line or delimiter on first line and numbers joined with this delimiter on second line
   * @return result of addition or 0 on wrong input
   * @throws error when input has wrong format or negative numbers are supplied
   */
  public add(input: string): number {
    this.callsCount += 1;
    
    if (!input) {
      return 0;
    }
    
    let numbers: number[];

    const separatorCandidate = input.substr(0, input.indexOf('\n'));
    if (!separatorCandidate || !isNaN(parseInt(separatorCandidate))) {
      numbers = this.addOneLiner(input);
    } else {
      numbers = this.addTwoLiner(input);
    }

    const negatives = numbers.filter(n => n < 0);
    this.failIf(negatives && negatives.length > 0, 'Negatives not allowed: ' + negatives.join(','));
    
    numbers = numbers.filter(n => n <= 1000);

    return numbers.reduce((prev, next) => prev + next);
  }

  private addOneLiner(input: string): number[] {
    const separators = /[\n,]/;
    return input.split(separators).map(s => parseInt(s));
  }

  private addTwoLiner(input: string): number[] {
    const lines = input.split('\n').map(l => l.trim());
    this.failIf(lines.length !== 2, 'Wrong input format');
    
    const separator = lines[0];
    this.failIf(!separator, 'No separator specified');

    if(!lines[1]) {
      return [0];
    }
    return lines[1].split(separator).map(s => parseInt(s));
  }

  private failIf(condition: boolean, message: string): void {
    if (condition) {
      throw new Error(message);
    }
  }
}