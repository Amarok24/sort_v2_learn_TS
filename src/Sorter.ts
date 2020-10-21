
// an abstract class cannot be instantiated with "new Classname()" anymore

export abstract class Sorter {
  // relevance of naming of abstract content is exactly like with interfaces
  // parameter names in an abstract function are irrelevant
  abstract compare(leftIx: number, rightIx: number): boolean;
  abstract swap(leftIx: number, rightIx: number): void;
  // but property names ARE relevant, they must match the implementation
  abstract length: number;


  sort(): void {
    const length: number = this.length;
    // const { length } = this; // equivalent, using destructuring assignment

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        if (this.compare(j, j+1)) {
          this.swap(j, j+1);
        }

      }
    }

  } // end sort

}
