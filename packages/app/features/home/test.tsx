import { H1, H3, Input, ScrollView, Sheet, View, YStack } from '@my/ui';
import { Button } from '@tamagui/button';
import CoinAnimation from 'app/assets/jsons/coin.json';
import PresentAnimation from 'app/assets/jsons/present.json';
import WriteTextAnimation from 'app/assets/jsons/write-text.json';
import Lottie from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const TEMPLATE_TEXT = `[タイトル]
[報告内容]
`;

export function TestScreen() {
  const [height, setHeight] = useState<number>(Dimensions.get('window').height);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [animationState, setAnimationState] = useState<'wait' | 'present' | 'get'>('wait');

  useEffect(() => {
    const _event = Dimensions.addEventListener('change', (e) => {
      setHeight(e.window.height);
    });
    return () => {
      _event.remove();
    };
  }, []);

  const handleSend = () => {
    setIsOpen(false);
    setAnimationState('present');
  };

  return (
    <YStack f={1} ai="center">
      <H1
        style={{
          marginTop: '3rem',
          color: '#ACB6E5',
          background: '-webkit-linear-gradient(0deg, #ACB6E5, #86FDE8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        NFT GachaPon
      </H1>
      <View>
        {animationState === 'wait' && (
          <Lottie source={WriteTextAnimation} autoPlay loop style={{ height: 300, width: 300 }} />
        )}
        {animationState === 'present' && (
          <Lottie source={PresentAnimation} autoPlay loop style={{ height: 300, width: 300 }} />
        )}
        {animationState === 'get' && (
          <Lottie source={CoinAnimation} autoPlay loop style={{ height: 300, width: 300 }} />
        )}
      </View>
      {animationState === 'wait' && <Button onPress={() => setIsOpen(!isOpen)}>Write Report!</Button>}
      {animationState === 'present' && <Button onPress={() => setAnimationState('get')}>Get Treasure</Button>}
      <ReportModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onSubmit={(e) => {
          console.log(e);
          handleSend();
        }}
      />
    </YStack>
  );
}

interface ReportModalProps {
  isOpen: boolean;
  onOpenChange: (e: boolean) => void;
  onSubmit: (e: string) => void;
}

function ReportModal(props: ReportModalProps): JSX.Element {
  const [text, setText] = useState<string>(TEMPLATE_TEXT);

  const handleSubmit = () => {
    props.onSubmit(text);
  };

  return (
    <Sheet modal snapPoints={[70]} open={props.isOpen} onOpenChange={props.onOpenChange} dismissOnSnapToBottom>
      <Sheet.Overlay />
      <Sheet.Frame>
        <Sheet.Handle />
        <ScrollView>
          <YStack space={'$6'} paddingBottom={'$8'} f={1} marginLeft={30} marginRight={30}>
            <H3>{'Write Report'}</H3>
            <Input placeholder="Write Report" rows={8} multiline value={text} onChangeText={setText} />
            <Button themeInverse onPress={handleSubmit} fontWeight={'bold'}>
              SUBMIT
            </Button>
          </YStack>
        </ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
}
