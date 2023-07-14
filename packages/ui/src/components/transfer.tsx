import { useState } from 'react';
import { requestSign, setTransactionByPayload } from 'sss-module';
import { announce, transfer } from 'symbol';
import { utf8ToHex } from 'symbol/src/utils/converter.js';
import { isMobileDevice } from 'symbol/src/utils/isMobileDevice.js';
import { Button, Input, XStack } from 'tamagui';

export function TransferForm({
  signerPublicKey,
  callback,
}: {
  signerPublicKey: string | undefined;
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
      const result = await announce(signed.payload);
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
          const payload = await transfer({ signerPublicKey, mosaicId, amount, address, message });
          await getSignedPayload(payload);
        }}
      >
        Sign
      </Button>
    </div>
  );
}
