import { DialogBase, Input, Paragraph, Spinner, View, XStack, YStack } from '@my/ui';
import { Button } from '@tamagui/button';
import { Copy } from '@tamagui/lucide-icons';
import CrackerAnimation from 'app/assets/jsons/cracker-animation.json';
import EggAnimation from 'app/assets/jsons/egg-2-animation.json';
import LoadingAnimalAnimation from 'app/assets/jsons/loading-animal-animation.json';
import Lottie from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { TransactionService } from 'symbol';

interface PaymentActionAnnounceProps {
  payload: string;
}

// nodeUrlはBrowserStorageから取得する
const node = 'https://mikun-testnet.tk:3001';

export function GetTreasure(props: PaymentActionAnnounceProps) {
  const [hash, setHash] = useState<string>('');
  const [animationState, setAnimationState] = useState<'wait' | 'present' | 'get' | 'fail'>('get');
  const [isGetTreasureLoading, setIsGetTreasureLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      if (props.payload === undefined) {
        return;
      }
      // トランザクション送信処理
      TransactionService.announceTransaction(node, props.payload).then((result) => {
        if (result.error) {
          // 失敗したら sheet modal を表示
          console.error(result.error);
        } else {
          // 成功したら Hashをセットし検証用ボタン（Get）を表示
          setHash(result.hash);
          setIsGetTreasureLoading(true);
          setAnimationState('present');
        }
      });
      setHash('*'.repeat(64));
      setAnimationState('present');
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
  };

  const handleGetTreasure = async () => {
    const res = await TransactionService.getTreasure(node, hash);
    if (res.message.error) {
      setAnimationState('fail');
    } else {
      setAnimationState('get');
    }
  };

  if (animationState === 'wait') {
    return (
      <YStack f={1} ai="center" jc="center" space={'$4'} key={animationState + Math.random().toString()}>
        <View enterStyle={{ scale: 1.5, y: -10, opacity: 0 }} animation="bouncy">
          <Lottie source={LoadingAnimalAnimation} autoPlay loop style={{ height: 300, width: 300, margin: '0 auto' }} />
        </View>

        <Paragraph>Signed transaction being sent.</Paragraph>
        <View height={150} />
      </YStack>
    );
  }

  if (animationState === 'present') {
    return (
      <YStack f={1} ai="center" jc="center" space={'$4'} padding={'$4'} key={animationState + Math.random().toString()}>
        <View enterStyle={{ x: -300, opacity: 0 }} animation="bouncy">
          <Lottie source={EggAnimation} autoPlay loop style={{ height: 300, width: 300, margin: '0 auto' }} />
        </View>
        {isGetTreasureLoading ? <Spinner size="large" /> : <Paragraph>Success! Would you like to get eggs?</Paragraph>}
        <YStack space={'$4'} width={'100%'} maxWidth={600}>
          <XStack space={'$4'} ai={'center'}>
            <Input f={1} multiline placeholder="Transaction Hash" value={hash} />
            <Button icon={<Copy />} onPress={handleCopy} />
          </XStack>
          <Button themeInverse onPress={handleGetTreasure}>
            YEAH!
          </Button>
        </YStack>
        <View height={150} />
      </YStack>
    );
  }

  if (animationState === 'get') {
    return (
      <YStack f={1} jc="flex-start" space={'$4'} padding={'$4'} key={animationState + Math.random().toString()}>
        <Lottie
          speed={0.2}
          source={CrackerAnimation}
          autoPlay
          style={{ height: 500, width: 'auto', margin: '0 auto' }}
        />
        <DialogBase
          isOpen={true}
          title="Congratulations!"
          description='You got a "XXXXXXXXX"!'
          onOpenChange={() => {}}
          contentStyle={{ width: '100%', maxWidth: 600, minHeight: 300 }}
        >
          <YStack space={'$4'} f={1} jc="center" ai="center">
            <Lottie source={EggAnimation} autoPlay loop style={{ height: 300, width: 300, margin: '0 auto' }} />
          </YStack>
        </DialogBase>
      </YStack>
    );
  }

  if (animationState === 'fail') {
    return (
      <YStack f={1} ai="center" jc="center" space={'$4'} key={animationState + Math.random().toString()}>
        <View>
          <Lottie
            source={EggAnimation}
            style={{ height: 300, width: 300, margin: '0 auto', transform: 'rotate(120deg)' }}
          />
        </View>
        {<Paragraph color={'$red10Dark'}>Failed. Please try again.</Paragraph>}
        <YStack space={'$4'} width={'100%'} maxWidth={600}>
          <Button themeInverse onPress={handleGetTreasure}>
            Retry...
          </Button>
        </YStack>
        <View height={150} />
      </YStack>
    );
  }
}
