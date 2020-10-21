import { Sorter } from "./Sorter.ts";


export class CharCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const strArr = this.data.split("");

    [strArr[leftIndex], strArr[rightIndex]] = [strArr[rightIndex], strArr[leftIndex]];

    this.data = strArr.join("");
  }

}
