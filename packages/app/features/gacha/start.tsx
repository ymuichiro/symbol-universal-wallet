import {
  Button,
  H2,
  H3,
  Input,
  Label,
  Paragraph,
  ScrollView,
  SelectBase,
  SheetBase,
  View,
  XStack,
  YStack,
} from '@my/ui';
import EggAnimation from 'app/assets/jsons/egg-animation.json';
import Lottie from 'lottie-react-native';
import React, { useState } from 'react';
import { useRouter } from 'solito/router';

interface MosaicSelectProps {
  name: string;
  value: string;
}

/**
 * ガチャアプリの起動、メッセージ入力の画面
 */
export function CapselToyStart(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const address = process.env.NEXT_PUBLIC_SYSTEM_ADDRESS;
  const ITEMS: MosaicSelectProps[] = [
    { name: 'symbol.xym', value: '72C0212E67A08BCE' },
    { name: 'none', value: 'none' },
  ];

  const handleSend = (message: string, mosaicId: string | undefined) => {
    const mosaic = mosaicId ? JSON.stringify([{ id: mosaicId, amount: 1 }]) : undefined;
    router.push({
      query: { address, mosaic, message, path: '/gacha/getTreasure' },
      pathname: '/payment/action/wait',
    });
    setIsOpen(false);
  };

  return (
    <YStack padding="$4" f={1}>
      <H2
        style={{
          color: '#ACB6E5',
          background: '-webkit-linear-gradient(0deg, #ACB6E5, #86FDE8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingRight: 20,
          letterSpacing: 1.1,
        }}
      >
        XYM Monster 😈
      </H2>
      <Paragraph>What you get depends on your luck!</Paragraph>
      <Paragraph theme="alt1" size="$3" marginTop="$3">
        XYM Monster is a game where you can get a random XYM Monster by inscribing today's events on the blockchain.
      </Paragraph>
      <Lottie source={EggAnimation} autoPlay loop style={{ height: 500 }} />
      <XStack jc="center">
        <Button
          themeShallow
          fontWeight="bold"
          paddingLeft={'$8'}
          paddingRight={'$8'}
          onPress={() => setIsOpen(!isOpen)}
        >
          GAME START !!
        </Button>
      </XStack>
      <SheetBase isOpen={isOpen} onOpenChange={setIsOpen}>
        <ReportModal
          items={ITEMS}
          onSubmit={(e) => {
            console.log(e.text);
            handleSend(e.text, e.mosaicId);
          }}
        />
      </SheetBase>
    </YStack>
  );
}

interface ReportModalProps {
  onSubmit: (e: { text: string; mosaicId?: string }) => void;
  items: MosaicSelectProps[];
}

function ReportModal(props: ReportModalProps): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [mosaicId, setMosaicId] = useState<string>(props.items[0]?.value ?? 'none');

  const handleSubmit = () => {
    const text = `${title}\n----------\n【報告内容】${message}`;
    props.onSubmit({ text, mosaicId: mosaicId === 'none' ? undefined : mosaicId });
  };

  return (
    <ScrollView>
      <YStack space={'$3'} paddingBottom={'$8'} f={1} marginLeft={30} marginRight={30}>
        <H3>Write Report</H3>
        <View>
          <Label>Report Title</Label>
          <Input value={title} onChangeText={setTitle} style={{ width: '100%' }} />
        </View>
        <View>
          <Label>Message</Label>
          <Input
            rows={8}
            placeholder="Maximum length is 300 characters."
            multiline
            value={message}
            onChangeText={setMessage}
            style={{ width: '100%' }}
            maxLength={300}
          />
        </View>
        <View>
          <Label>Token</Label>
          <SelectBase items={props.items} select={{ id: 'xymMon', value: mosaicId, onValueChange: setMosaicId }} />
        </View>
        <Button themeInverse onPress={handleSubmit} fontWeight={'bold'} marginTop={'$4'}>
          SUBMIT
        </Button>
      </YStack>
    </ScrollView>
  );
}
