import { YStack } from '@tamagui/stacks';
import { useEffect } from 'react';

interface PaymentActionWaitProps {
  address: string;
  mosaic: { id: string; amount: number }[];
  message: string;
  isEncrypt: boolean;
}

export function PaymentActionWait(props: PaymentActionWaitProps): JSX.Element {
  useEffect(() => {
    // ここに alice リダイレクト処理
    console.log(props);
  }, []);

  return (
    <YStack f={1} jc="center" ai="center">
      Please close this page.
    </YStack>
  );
}
