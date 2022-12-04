import { DLLNode } from "./dllNode";

interface IDoublyLinkedList {
  dllInsert(data: number, position: number): void;
  deleteNodeFromLinkedList(position: number): void;
}

export class DoublyLinkedList implements IDoublyLinkedList {
  private head: DLLNode | null = null;

  public dllInsert(data: number, position: number) {
    const newNode = new DLLNode(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    if (position === 1) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let tmp: DLLNode | null = this.head;
    let k = 1;
    // currentはnewNodeの1つ手前
    while (tmp !== null && k < position - 1) {
      k++;
      tmp = tmp.next;
    }
    newNode.next = tmp?.next || null;
    newNode.prev = tmp;
    tmp && (tmp.next = newNode);
    return;
  }
  public dllDelete(position: number) {
    if (this.head === null) {
      console.log("List is Empty");
      return;
    }
    let current: DLLNode | null = this.head;
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
      current?.next && (current.next.prev = past);
    }
  }
}
