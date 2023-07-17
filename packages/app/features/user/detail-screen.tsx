import { TransferForm } from '@my/ui/src/components/transfer';
import { ChevronLeft } from '@tamagui/lucide-icons';
import React, { useEffect, useState } from 'react';
import { createParam } from 'solito';
import { useLink } from 'solito/link';
import { Button, Paragraph, Text, XStack } from 'tamagui';
import AccountService, { AccountInfoDTO } from 'symbol/src/services/AccountService';
import TransactionService from 'symbol/src/services/TransactionService';
import { hexToAddress } from 'symbol/src/utils/utils';

const { useParam } = createParam<{ id: string; signed_payload: string }>();
const accountService = new AccountService("13B00FBB13C7644E13BD786F0EA4F97820022A2606759793A5D3525A03F92A2F");

function ListMosaic({ moasicId, amount }: { moasicId: string; amount: BigInt }) {
  return (
    <div>
      <Paragraph ta="center" fow="700">
        {moasicId} : {amount.toString()}
      </Paragraph>
    </div>
  );
}

export function UserDetailScreen() {
  const [ accountInfo, setAccountInfo ] = useState<AccountInfoDTO | null>(null);
  const [ address, setAddress ] = useState('');
  const [ publicKey, setPublicKey ] = useState('');

  const [id] = useParam('id');
  const link = useLink({
    href: '/',
  });

  useEffect(() => {
    if (id === undefined) return;
    console.log(id);
    const _ = async () => {
      const data = await accountService.getAccountInfo("https://mikun-testnet.tk:3001");
      setAddress(hexToAddress(data.account.address));
      setPublicKey(data.account.publicKey);
      setAccountInfo(data);
    };
    _();
    TransactionService.getConfirmedTransaction("https://mikun-testnet.tk:3001", "DF8AF0EA247E0801ED6C0D778D729DC03362BE1BF581C3947136121B7C92E7A9").then((result) => {
      console.log(result);
    })
  }, [id]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const signed_payload = queryParams.get('signed_payload');
    if (signed_payload === null) return;
    TransactionService.announceTransaction("https://mikun-testnet.tk:3001", signed_payload).then((result) => {
      alert('送信しました');
    });
  }, []);

  return (
    <div>
      <XStack>
        <Paragraph ta="center" fow="700">{`Address: ${ address }`}</Paragraph>
      </XStack>
      <XStack>
        <Paragraph ta="center" fow="700">{`PublicKey: ${ publicKey }`}</Paragraph>
      </XStack>
      <div>
        <Text color="$white" fontFamily="$body">
          Mosaics
        </Text>
        {accountInfo?.account.mosaics.map((mosaic, index) => (
          <ListMosaic key={index} moasicId={mosaic.id} amount={BigInt(mosaic.amount)} /* その他のプロパティ */ />
        ))}
      </div>
      <TransferForm />
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </div>
  );
}
