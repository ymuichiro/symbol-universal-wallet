import base32 from '@my/ui/src/utils/base32';
import { hexToUint8 } from '@my/ui/src/utils/converter';
import { Account, Mosaic } from './models/Account';

const NODE = 'https://mikun-testnet.tk:3001';
//const BACKEND = 'http://localhost:3000';
const BACKEND = 'http://192.168.10.4:3000';

export async function getDataFromApi(url: string) {
  const res = await fetch(url);
  return res.json();
}

export async function getAccountInfo(address: string): Promise<Account> {
  try {
    const data = await getDataFromApi(NODE + '/accounts/' + address);
    let mosaics: Mosaic[] = [];
    data.account.mosaics.forEach((m) => {
      mosaics.push({
        id: m.id,
        amount: BigInt(m.amount),
      });
    });
    const account: Account = {
      address: base32.encode(new Uint8Array([...hexToUint8(data.account.address), 0])).slice(0, -1),
      publicKey: data.account.publicKey,
      mosaics,
    };
    return account;
  } catch (e) {
    throw new Error(e);
  }
}

export async function transfer({
  signerPublicKey,
  mosaicId,
  amount,
  address,
  message,
}: {
  signerPublicKey: string | undefined;
  mosaicId: string;
  amount: string;
  address: string;
  message: string;
}): Promise<string> {
  try {
    const url = `${BACKEND}/transaction/transfer?&mosaicId=${mosaicId}&mosaicAmount=${amount}&recipientAddress=${address}&signerPublicKey=${signerPublicKey}&message=${message}&feeMultiplier=100`;
    const result = await getDataFromApi(url);
    return result.payload;
  } catch (e) {
    throw new Error(e);
  }
}

export async function announce(payload: string): Promise<string> {
  const data = {
    payload: payload,
  };
  const result = await fetch(NODE + '/transactions', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return result.json();
}
