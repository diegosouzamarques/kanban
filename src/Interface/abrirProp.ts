import { IWorkFlow } from "./IWorkFlow";

export interface abrirProp {
  isShowing: boolean;
  toggle: () => void;
  workFlow: IWorkFlow;
}