export class DLLNode {
  public next: DLLNode | null = null;
  public prev: DLLNode | null = null;
  constructor(public data: number) {}
}
