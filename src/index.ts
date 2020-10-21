import { NumbersCollection } from "./NumbersCollection.ts";
import { CharCollection } from "./CharCollection.ts";
import { LinkedList } from "./LinkedList.ts";

console.log("hello from index.ts");


// NumbersCollection demo
const numCollection = new NumbersCollection([10, 3, -5, 0]);
numCollection.sort();
console.log(numCollection.data); // [ -5, 0, 3, 10 ]


// CharCollection demo
const charCollection = new CharCollection("Xaayb");
charCollection.sort();
console.log(charCollection.data); // aabXy


// LinkedList demo
const list = new LinkedList();
try {
  list.add(500);
  list.add(-10);
  list.add(-3);
  list.add(4);
  list.sort();
  list.print();
  console.log(list.at(3));
  console.log(list.at(4)); // this will throw an error
} catch (err) {
  console.log("list", err);
}

/*
-10
-3
4
500
Node { next: null, data: 500 }
list Error: Index out of bounds.
    at LinkedList.at (file:///.....sort_v2_learn_TS/src/LinkedList.ts:65:11)
    at file:///.....sort_v2_learn_TS/src/index.ts:30:20
*/
