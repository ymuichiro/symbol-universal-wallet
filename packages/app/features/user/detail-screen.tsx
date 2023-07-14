import { ChevronLeft } from '@tamagui/lucide-icons'
import React, { useEffect, useState } from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'
import { getAccountInfo, announce } from '../../../symbol/api';
import { Button, Paragraph, Text, XStack } from 'tamagui'
import { Account } from '../../../symbol/model'
import { TransferForm } from '../../../symbol/compornents/transfer'

const { useParam } = createParam<{ id: string, signed_payload: string }>()

function ListMosaic({ moasicId, amount }: { moasicId: string, amount: BigInt }) {
  return (
    <div>
      <Paragraph ta="center" fow="700">{ moasicId } : { amount.toString() }</Paragraph>
    </div>
  )
}

export function UserDetailScreen() {
  const [ account, setAccount ] = useState<Account | null>(null);
  const [ currentUrl, setCurrentUrl ] = useState('');

  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  useEffect(() => {
    if(id === undefined) return;
    console.log(id);
    const _ = async () => {
      const data = await getAccountInfo(id);
      setAccount(data);
    }
    _();
    setCurrentUrl(window.location.href);
  }, [id])

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const signed_payload = queryParams.get('signed_payload');
    if(signed_payload === null) return;
    announce(signed_payload).then((result) => {
      alert("送信しました");
    });
  }, [])

  return (
    <div>
      <XStack>
        <Paragraph ta="center" fow="700">{`Address: ${account?.address}`}</Paragraph>
      </XStack>
      <XStack>
        <Paragraph ta="center" fow="700">{`PublicKey: ${account?.publicKey}`}</Paragraph>
      </XStack>
      <div>
      <Text color="$white" fontFamily="$body">Mosaics</Text>
        {account?.mosaics.map((mosaic, index) => (
          <ListMosaic key={index} moasicId={mosaic.id} amount={mosaic.amount} /* その他のプロパティ */ />
        ))}
      </div>
      <TransferForm signerPublicKey={account?.publicKey} callback={currentUrl} />
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </div>
  )
}
