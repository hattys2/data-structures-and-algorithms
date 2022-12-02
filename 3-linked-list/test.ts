import { LinkedList } from "./linkedlist";

const linkedList = new LinkedList();

linkedList.insertInLinnkedList(2, 1);
linkedList.insertInLinnkedList(6, 2);
linkedList.insertInLinnkedList(4, 2);

console.log(linkedList.listLength);
console.log(JSON.stringify(linkedList));
linkedList.insertInLinnkedList(8, 1);
console.log(JSON.stringify(linkedList));
linkedList.deleteNodeFromLinkedList(2);
console.log(JSON.stringify(linkedList));
