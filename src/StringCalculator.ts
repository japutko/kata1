export default class StringCalculator {
  /**
   * Simulates addition on numbers given on input.
   * @param input up to 3 numbers separated by comma or new line or delimiter on first line and numbers joined with this delimiter on second line
   * @return result of addition or 0 on wrong input
   */
  public add(input: string): number {
    if (!input) {
      return 0;
    }
    const separatorCandidate = input.substr(0, input.indexOf('\n'));
    
    let numbers: number[];
    if (!separatorCandidate || !isNaN(parseInt(separatorCandidate))) {
      numbers = this.addOneLiner(input);
    } else {
      numbers = this.addTwoLiner(input);
    }
    const negatives = numbers.filter(n => n < 0);
    if (negatives && negatives.length > 0) {
      throw new Error('Negatives not allowed: ' + negatives.join(','));
    }

    return numbers.reduce((prev, next) => prev + next);
  }

  private addOneLiner(input: string): number[] {
    const separators = /[\n,]/;
    return input.split(separators).map(s => parseInt(s));
  }

  private addTwoLiner(input: string): number[] {
    const lines = input.split('\n').map(l => l.trim());
    if (lines.length !== 2) {
      throw new Error('Wrong input format');
    }
    const separator = lines[0];
    if (!separator) {
      throw new Error('No separator specified');
    }
    if(!lines[1]) {
      return [0];
    }
    return lines[1].split(separator).map(s => parseInt(s));
  }
}