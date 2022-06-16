import { OperationT } from "./interfaces";


export const add: OperationT = (a: number, b: number) => a + b;

export const sub: OperationT = (a: number, b: number) => a - b;

export const mult: OperationT = (a: number, b: number) => a * b;

export const div: OperationT = (a: number, b: number) => a / b;
