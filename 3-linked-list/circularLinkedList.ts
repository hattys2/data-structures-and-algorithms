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
    return;
  }

  public insertAtBeginInCll(data: number) {
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
    this.head = newNode;
    return;
  }

  public deleteLastNodeFromCLL() {
    if (this.head === null) {
      console.log("Error");
      return;
    }
    let current: ListNode | null = this.head;
    let temp: ListNode | null = this.head;
    while (current?.next !== this.head) {
      temp = current;
      current && (current = current.next);
    }
    temp && (temp.next = current.next);
    return;
  }

  public deleteFrontNodeFromCLL() {
    if (this.head === null) {
      console.log("Error");
      return;
    }
    let current: ListNode | null = this.head;
    while (current?.next !== this.head) {
      current && (current = current.next);
    }
    current.next = this.head.next;
    this.head = this.head.next;
    return;
  }

  /*
  public cllInsert(data: number, position: number) {
    const newNode = new CLLNode(data);
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
    let tmp: CLLNode | null = this.head;
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
  public cllDelete(position: number) {
    if (this.head === null) {
      console.log("List is Empty");
      return;
    }
    let current: CLLNode | null = this.head;
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
  */
}
