import { Stack } from "./stack";

const stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(6);

console.log(stack.size());
console.log(stack.getTop());
console.log(stack.pop());
console.log(stack.size());
