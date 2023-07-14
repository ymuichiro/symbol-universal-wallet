import { Mosaic } from './Mosaic';

export interface Account {
  address: string;
  publicKey: string;
  mosaics: Mosaic[];
}
