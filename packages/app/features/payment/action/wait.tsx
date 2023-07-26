import { YStack } from '@tamagui/stacks';
import { useEffect } from 'react';
import { useRouter } from 'solito/router';
import { TransferTransaction, NetworkType } from 'symbol';

interface PaymentActionWaitProps {
  address: string;
  mosaic: { id: string; amount: BigInt }[];
  message: string;
  isEncrypt: boolean;
}

export function PaymentActionWait(props: PaymentActionWaitProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    // NetworkTypeはどこかに保存しているものを使う
    const transferTransaction = new TransferTransaction(
      NetworkType.TESTNET,
      props.address,
      undefined,
      undefined,
      props.mosaic,
      props.message
    );
    transferTransaction.build();
    transferTransaction.sign().then(signed_payload => {
      // aLiceだとundefinedを返すのでSSSならannounceへリダイレクトする
      if (signed_payload !== undefined) {
        router.push({
          query: { signed_payload },
          pathname: '/payment/action/announce',
        });
      }
    });
  }, []);

  return (
    <YStack f={1} jc="center" ai="center">
      Please close this page.
    </YStack>
  );
}
