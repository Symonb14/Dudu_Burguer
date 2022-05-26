import cardapio from 'data/cardapio.json'
import { type } from 'os'

export type Cardapio = typeof cardapio;

export type Prato = typeof cardapio[0];