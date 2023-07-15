import { node, getDataFromApi, Mosaic, Account, hexToUint8, base32 } from '../restApiClient/shared';

export default class AccountService {
    public async getAccountInfo(address: string) {
        try {
            const data = await getDataFromApi(node + '/accounts/' + address);
            let mosaics: Mosaic[] = [];
            data.account.mosaics.forEach(m => {
                mosaics.push({
                    id: m.id,
                    amount: BigInt(m.amount)
                })
            });
            const account: Account = {
                address: base32.encode(new Uint8Array([...hexToUint8(data.account.address), 0])).slice(0, -1),
                publicKey: data.account.publicKey,
                mosaics
            };
            return account;
        } catch(e) {
            throw new Error(e.message);
        }
    }
}
