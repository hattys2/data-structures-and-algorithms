import { LinkedList } from "./linkedlist";

const linkedList = new LinkedList();

linkedList.insertInLinkedList(2, 1);
linkedList.insertInLinkedList(6, 2);
linkedList.insertInLinkedList(4, 2);

console.log(linkedList.listLength);
console.log(JSON.stringify(linkedList));
linkedList.insertInLinkedList(8, 1);
console.log(JSON.stringify(linkedList));
linkedList.deleteNodeFromLinkedList(2);
console.log(JSON.stringify(linkedList));
