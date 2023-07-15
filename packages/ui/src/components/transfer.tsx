import { useState } from 'react';
import { requestSign, setTransactionByPayload } from 'sss-module';
import TransactionService from 'symbol/src/services/restApiClient/TransactionService';
import { utf8ToHex } from 'symbol/src/utils/converter';
import { isMobileDevice } from 'symbol/src/utils/isMobileDevice';
import { Button, Input, XStack } from 'tamagui';
import transfer from 'symbol/src/services/transactions/transfer';
import { NetworkType } from 'symbol/src/models/NetworkType';
import Mosaic from 'symbol/src/models/Mosaic';
import ITransferTransaction from 'symbol/src/models/transactions/ITransferTransaction';

export function TransferForm({
  signerPublicKey,
  callback,
}: {
  signerPublicKey?: string;
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

  async function getSignedPayload(payload: string) {
    if (!isMobileDevice()) {
      setTransactionByPayload(payload);
      const signed = await requestSign();
      const result = await new TransactionService().announce(signed.payload);
    } else {
      callAlice(payload);
    }
  }

  async function callAlice(payload: string) {
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
            signerPublicKey,
            mosaics,
            recipientAddress: address,
            message: message
        }
          const payload = await transfer(transferTransaction);
          await getSignedPayload(payload);
        }}
      >
        Sign
      </Button>
    </div>
  );
}
