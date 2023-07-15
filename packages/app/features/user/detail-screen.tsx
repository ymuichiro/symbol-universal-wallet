import { TransferForm } from '@my/ui/src/components/transfer';
import { ChevronLeft } from '@tamagui/lucide-icons';
import React, { useEffect, useState } from 'react';
import { createParam } from 'solito';
import { useLink } from 'solito/link';
import { Button, Paragraph, Text, XStack } from 'tamagui';
import { initSymbolApi, node } from 'symbol/src/services/restApiClient';
import TransactionService from 'symbol/src/services/restApiClient/TransactionService';
import { TransactionGroup } from 'symbol/src/models/restApi/transactions/SearchCriteria';
import { TransactionType } from 'symbol/src/models/transactions/TransactionType';

import AccountService from 'symbol/src/services/restApiClient/AccountService';
import { Account } from 'symbol/src/models/Account';

const { useParam } = createParam<{ id: string; signed_payload: string }>();

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
  if(node === undefined){
    initSymbolApi("https://mikun-testnet.tk:3001");
    console.log("init node");
  }
  const [account, setAccount] = useState<Account | null>(null);
  const [currentUrl, setCurrentUrl] = useState('');

  const [id] = useParam('id');
  const link = useLink({
    href: '/',
  });

  useEffect(() => {
    if (id === undefined) return;
    console.log(id);
    const _ = async () => {
      const data = await new AccountService().getAccountInfo(id);
      setAccount(data);
    };
    _();
    setCurrentUrl(window.location.href);
    new TransactionService().searchTransactions(TransactionGroup.Confirmed, {address: id, type: TransactionType.TransferTransaction}).then((result) => {
    });
  }, [id]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const signed_payload = queryParams.get('signed_payload');
    if (signed_payload === null) return;
    new TransactionService().announce(signed_payload).then((result) => {
      alert('送信しました');
    });
  }, []);

  return (
    <div>
      <XStack>
        <Paragraph ta="center" fow="700">{`Address: ${account?.address}`}</Paragraph>
      </XStack>
      <XStack>
        <Paragraph ta="center" fow="700">{`PublicKey: ${account?.publicKey}`}</Paragraph>
      </XStack>
      <div>
        <Text color="$white" fontFamily="$body">
          Mosaics
        </Text>
        {account?.mosaics.map((mosaic, index) => (
          <ListMosaic key={index} moasicId={mosaic.id} amount={mosaic.amount} /* その他のプロパティ */ />
        ))}
      </div>
      <TransferForm signerPublicKey={account?.publicKey} callback={currentUrl} />
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </div>
  );
}
