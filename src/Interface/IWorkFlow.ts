import { FaseStep } from "../Enum/FaseStep"

export interface IWorkFlow{
    id?: string
    titulo: string
    descricao: string
    dataEntrega: Date
    arquivo:string,
    step: FaseStep
}