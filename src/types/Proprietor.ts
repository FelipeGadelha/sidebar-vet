import { Address } from "./Address"
import { Pet } from "./Pet"

export class Proprietor {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public cpf: string,
    public phone: string  
  ) {}
}
// export type Proprietor = {
//   id: number
//   name: string
//   email: string
//   cpf: string
//   phone: string
// }

export type ProprietorDetail = {
  address: Address,
  pets: [ Pet ],
  createdAt: string
} & Proprietor

export type Proprietors = Proprietor[]