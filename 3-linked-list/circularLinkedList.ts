import { CLLNode } from "./cllNode";
import { ListNode } from "./listNode";

interface ICircularLinkedList {
  listLength(): number;
  printCircularListData(): void;
  insertAtEndInCll(data: number): void;

  //  cllInsert(data: number, position: number): void;
  // cllDelete(position: number): void;
}

export class CircularLinkedList implements ICircularLinkedList {
  private head: CLLNode | null = null;

  public listLength() {
    if (this.head === null) return 0;
    let current: ListNode | null = this.head;
    let count = 0;
    do {
      count++;
      current && (current = current.next);
    } while (current !== this.head);
    return count;
  }

  public printCircularListData() {
    if (this.head === null) return;
    let current: ListNode | null = this.head;
    do {
      console.log(current);
      current && (current = current.next);
    } while (current !== this.head);
  }

  public insertAtEndInCll(data: number) {
    const newNode = new CLLNode(data);
    if (!newNode) {
      console.log("Error");
      return;
    }
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current: ListNode | null = this.head;
    while (current?.next !== this.head) {
      current && (current = current.next);
    }
    newNode.next = this.head;
    current.next = newNode;
  }
}
