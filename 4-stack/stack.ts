interface IStack {
  push(data: number): void;
  pop(): number | null;
  getTop(): number | null;
  size(): number;
  isEmptyStack(): boolean;
  isFullStack(): boolean;
}

export class Stack implements IStack {
  private array: number[] = [];
  private top: number | null = null;
  constructor(private capacity: number = Infinity) {}

  size(): number {
    return this.array.length;
  }

  isEmptyStack(): boolean {
    return this.top === null;
  }

  isFullStack(): boolean {
    return this.size() === this.capacity;
  }

  push(data: number): void {
    if (this.isFullStack()) {
      throw Error("Full Stack");
    } else {
      this.top = data;
      this.array.push(data);
    }
  }

  pop(): number | null {
    if (this.isEmptyStack()) {
      throw Error("Empty Stack");
    } else {
      this.top = this.array[this.size() - 2];
      return this.array.pop() || null;
    }
  }

  getTop(): number | null {
    if (this.isEmptyStack()) {
      throw Error("Empty Stack");
    } else {
      return this.top;
    }
  }
}
