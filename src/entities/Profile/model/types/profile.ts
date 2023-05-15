import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

export interface Profile {
  id?:string
  lastname?: string
  firstname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

