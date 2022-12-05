import { ListNode } from "./listNode";

interface ILinkedList {
  listLength(): number;
  insertInLinkedList(data: number, position: number): void;
  deleteNodeFromLinkedList(position: number): void;
  nthNodeFromEnd(n: number): ListNode | null;
}

export class LinkedList implements ILinkedList {
  private head: ListNode | null = null;

  public listLength() {
    let current: ListNode | null = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  public insertInLinkedList(data: number, position: number) {
    const newNode = new ListNode(data);
    let current = this.head;
    if (position === 1) {
      newNode.next = current;
      this.head = newNode;
    } else {
      let k = 1;
      // currentはnewNodeの1つ手前
      while (current !== null && k < position - 1) {
        k++;
        current = current.next;
      }
      newNode.next = current?.next || null;
      current && (current.next = newNode);
    }
  }
  public deleteNodeFromLinkedList(position: number) {
    if (this.head === null) {
      console.log("List Empty");
      return;
    }
    let current: ListNode | null = this.head;
    if (position === 1) {
      this.head = current.next;
      return;
    } else {
      let k = 1;
      let past = this.head;
      while (current !== null && k < position) {
        k++;
        past = current;
        current = current.next;
      }
      past.next = current?.next || null;
    }
  }

  // 問題3-5
  public nthNodeFromEnd(nthNode: number) {
    let pTemp: ListNode | null = this.head;
    let pNthNode: ListNode | null = this.head;
    let count = 0;
    while (pTemp !== null) {
      count++;
      pTemp = pTemp?.next;
      if (nthNode - count < 0) {
        pNthNode && (pNthNode = pNthNode?.next);
      }
    }
    if (count >= nthNode) return pNthNode;
    return null;
  }
}
