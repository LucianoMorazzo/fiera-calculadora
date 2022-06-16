export type OperationT = (a: number, b: number) => number;

export interface CalculatorData {
  firstNum: string,
  secondNum: string,
  operation: OperationT
}

