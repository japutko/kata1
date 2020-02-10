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
      const separators = /[\n,]/;
      numbers = input.split(separators).map(s => parseInt(s));
    } else {
      const lines = input.split('\n').map(l => l.trim());
      if (lines.length !== 2) {
        return 0;
      }
      const separator = lines[0];
      if (!separator) {
        return 0;
      }
      numbers = lines[1].split(separator).map(s => parseInt(s));
    }

    return numbers.reduce((prev, next) => prev + next);
  }
}