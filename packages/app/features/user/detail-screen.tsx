import { TransferForm } from '@my/ui/src/components/transfer';
import { ChevronLeft } from '@tamagui/lucide-icons';
import React, { useEffect, useState } from 'react';
import { createParam } from 'solito';
import { useLink } from 'solito/link';
import { Button, Paragraph, Text, XStack } from 'tamagui';
import SymbolApiService from 'symbol/src/services/SymbolApiService';
import { TransactionGroup } from 'symbol/src/models/SearchCriteria';
import { TransactionType } from 'symbol/src/models/TransactionType';
import { Account } from 'symbol/src/models/Account';

const { useParam } = createParam<{ id: string; signed_payload: string }>();
const symbolApiService = new SymbolApiService("https://mikun-testnet.tk:3001");
const accountService = symbolApiService.createAccountService();
const transactionSerice = symbolApiService.createTransactionService();

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
      const data = await accountService.getAccountInfo(id);
      setAccount(data);
    };
    _();
    setCurrentUrl(window.location.href);
    transactionSerice.getTransactionInfo(TransactionGroup.Confirmed, "1B5DA615114774D75105258D8CFE50EB58B48519A40BA4A377679471ABECC993").then((result) => console.log(result));
    transactionSerice.searchTransactions(TransactionGroup.Confirmed, {address: id, type: TransactionType.TransferTransaction}).then((result) => {
      console.log(result);
    });
  }, [id]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const signed_payload = queryParams.get('signed_payload');
    if (signed_payload === null) return;
    transactionSerice.announce(signed_payload).then((result) => {
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
      <TransferForm callback={currentUrl} />
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </div>
  );
}
