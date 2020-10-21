import { Sorter } from "./Sorter.ts";


class Node {
  data: number;
  next: Node | null = null;

  constructor(data: number) {
    this.data = data;
  }
}


export class LinkedList extends Sorter {
  head: Node | null = null;
/*
  constructor() {  // IN THIS CASE constructor not necessary
    // and super() will be called automatically whenever constructor not defined
    super();
  }
*/
  add(data: number): void {
    const newNode = new Node(data);

    if(!this.head) {
      this.head = newNode;
      return;
    }

    let iterator = this.head;
    while(iterator.next) iterator = iterator.next;

    iterator.next = newNode;
  }

  get length(): number {
    let counter = 1;
    let iterator: Node | null;

    if(this.head === null) return 0;

    iterator = this.head;
    while(iterator.next) {
      counter++;
      iterator = iterator.next;
    }

    return counter;
  }

  at(index: number): Node {
    let counter = 0;
    let node = this.head;

    if(node === null) {
      throw new Error("Head of LinkedList is null.");
    }

    while(node !== null) {
      if(index === counter) return node;
      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds.");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if(this.head === null) {
      throw new Error("Head of LinkedList is null.");
    }

    return (
      this.at(leftIndex).data > this.at(rightIndex).data
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    // this implementation only swaps the data of both nodes
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];
  }

  print(): void {
    let node = this.head;

    if(this.head === null) return;

    while(node !== null) {
      console.log(node.data);
      node = node.next;
    }
  }

}
