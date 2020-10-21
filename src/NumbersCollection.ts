import { Sorter } from "./Sorter.ts";


export class NumbersCollection extends Sorter {

  constructor(public data: number[]) {
    super(); // super call is mandatory, even if parent has no constructor content
  }

  // This is a "getter". The 'get' keyword turns a method into a property
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }

}
