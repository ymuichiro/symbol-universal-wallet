import { useState, useEffect } from 'react';
import { requestSign, setTransactionByPayload } from 'sss-module';
import SymbolApiService from 'symbol/src/services/SymbolApiService';
import { utf8ToHex } from 'symbol/src/utils/converter';
import { isMobileDevice } from 'symbol/src/utils/isMobileDevice';
import { Button, Input, XStack } from 'tamagui';
import TransactionBuilderService from 'symbol/src/services/TransactionBuilderService';
import { NetworkType } from 'symbol/src/models/NetworkType';
import Mosaic from 'symbol/src/models/Mosaic';
import ITransferTransaction from 'symbol/src/models/interfaces/ITransferTransaction';

export function TransferForm({
  callback,
}: {
  callback?: string;
}) {
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [mosaicId, setMosaicId] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddressChange = (event: any) => {
    setAddress(event.target.value);
  };
  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };
  const handleMosaicIdChange = (event: any) => {
    setMosaicId(event.target.value);
  };
  const handleAmountChange = (event: any) => {
    setAmount(event.target.value);
  };
  
  useEffect(() => {
    setAddress("TAUYF774MZWLBEUI7S2LR6BA5CYLL53QSMDVV3Y");
    setMessage("test");
    setMosaicId("72C0212E67A08BCE");
    setAmount("1");
  }, []);

  async function getSignedPayload(payload: string) {
    if (!isMobileDevice()) {
      setTransactionByPayload(payload);
      const signed = await requestSign();
      const symbolApiService = new SymbolApiService("https://mikun-testnet.tk:3001");
      const transactionSerice = symbolApiService.createTransactionService();
      const result = await transactionSerice.announce(signed.payload);
    } else {
      callAlice(payload);
    }
  }

  async function callAlice(payload: string) {
    console.log(utf8ToHex(callback!));
    window.location.href = `alice://sign?type=request_sign_transaction&data=${payload}&callback=${utf8ToHex(
      callback!
    )}`;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <XStack alignItems="center" space="$2">
        <label style={{ marginRight: '20px' }}>address</label>
        <Input size="$2" width="$20" borderWidth={2} value={address} onChange={handleAddressChange} />
      </XStack>
      <XStack alignItems="center" space="$2">
        <label style={{ marginRight: '20px' }}>message</label>
        <Input size="$2" width="$20" borderWidth={2} value={message} onChange={handleMessageChange} />
      </XStack>
      <XStack alignItems="center" space="$2">
        <label style={{ marginRight: '20px' }}>mosaicId</label>
        <Input size="$2" width="$20" borderWidth={2} value={mosaicId} onChange={handleMosaicIdChange} />
      </XStack>
      <XStack alignItems="center" space="$2">
        <label style={{ marginRight: '20px' }}>amount</label>
        <Input size="$2" width="$20" borderWidth={2} value={amount} onChange={handleAmountChange} />
      </XStack>
      <Button
        onPress={async () => {
          const mosaics: Mosaic[] = [{
            id: mosaicId,
            amount: BigInt(amount)
        }];

        const transferTransaction: ITransferTransaction = {
            networkType: NetworkType.TESTNET,
            mosaics,
            recipientAddress: address,
            message: message
        }
          const payload = await TransactionBuilderService.buildTransferTransaction(transferTransaction);
          await getSignedPayload(payload);
        }}
      >
        Sign
      </Button>
    </div>
  );
}
