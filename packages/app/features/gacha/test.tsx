import { H1, H3, Input, ScrollView, Sheet, View, YStack, XStack } from '@my/ui';
import { Button } from '@tamagui/button';
import { Select, SelectProps } from '@tamagui/select';
import { Adapt } from '@tamagui/adapt';
import { Label } from '@tamagui/label';
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { LinearGradient } from 'tamagui/linear-gradient'
import WriteTextAnimation from 'app/assets/jsons/write-text.json';
import Lottie from 'lottie-react-native';
import React, { useEffect, useState, useMemo } from 'react';
import { Dimensions } from 'react-native';
import { useRouter } from 'solito/router';

const TEMPLATE_TEXT = `[タイトル]
[報告内容]
`;
enum MosaicIds {
  'none' = 'none',
  '72C0212E67A08BCE' = '72C0212E67A08BCE',
}

export function TestScreen() {
  const [height, setHeight] = useState<number>(Dimensions.get('window').height);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const address = process.env.NEXT_PUBLIC_SYSTEM_ADDRESS;

  useEffect(() => {
    const _event = Dimensions.addEventListener('change', (e) => {
      setHeight(e.window.height);
    });
    return () => {
      _event.remove();
    };
  }, []);

  const handleSend = (message: string, mosaicId: string | undefined) => {
    const mosaic = mosaicId !== MosaicIds.none ? JSON.stringify([{
      id: mosaicId,
      amount: 1,
    }]) : undefined;
    router.push({
      query: { address, mosaic, message, path: '/gacha/getTreasure'},
      pathname: '/payment/action/wait',
    });
    setIsOpen(false);
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
        <Lottie source={WriteTextAnimation} autoPlay loop style={{ height: 300, width: 300 }} />
      </View>
      <Button onPress={() => setIsOpen(!isOpen)}>Write Report!</Button>
      <ReportModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onSubmit={(e, m) => {
          console.log(e);
          handleSend(e, m);
        }}
      />
    </YStack>
  );
}

interface ReportModalProps {
  isOpen: boolean;
  onOpenChange: (e: boolean) => void;
  onSubmit: (e: string, m: string | undefined) => void;
}

function ReportModal(props: ReportModalProps): JSX.Element {
  const [text, setText] = useState<string>(TEMPLATE_TEXT);
  const [mosaicId, setMosaicId] = useState<string>();

  const handleSubmit = () => {
    props.onSubmit(text, mosaicId);
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
            <SelectXymMon 
              onValueChange={(value)=>{
                setMosaicId(value);
                console.log(value)
              }}
              value={mosaicId}
            />
            <Button themeInverse onPress={handleSubmit} fontWeight={'bold'}>
              SUBMIT
            </Button>
          </YStack>
        </ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
}

export function SelectXymMon(props: SelectProps) {
  const [val, setVal] = useState('0EE5AA6102C675A5')

  return (
    <Select id="xymMon" value={val} onValueChange={setVal} {...props}>
      <Select.Trigger width={400} iconAfter={ChevronDown}>
        <Select.Value placeholder="Something" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: 'spring',
            damping: 20,
            mass: 1.2,
            stiffness: 250,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$background', '$backgroundTransparent']}
            borderRadius="$4"
          />
        </Select.ScrollUpButton>

        <Select.Viewport
          // to do animations:
          // animation="quick"
          // animateOnly={['transform', 'opacity']}
          // enterStyle={{ o: 0, y: -10 }}
          // exitStyle={{ o: 0, y: 10 }}
          minWidth={200}
        >
          <Select.Group>
            <Select.Label>XYM Monster</Select.Label>
            {/* for longer lists memoizing these is useful */}
            {useMemo(
              () =>
                items.map((item, i) => {
                  return (
                    <Select.Item
                      index={i}
                      key={item.name}
                      value={item.name}
                    >
                      <Select.ItemText>{item.name}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  )
                }),
              [items]
            )}
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$backgroundTransparent', '$background']}
            borderRadius="$4"
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  )
}

let items = [
  { name: MosaicIds.none },
  { name: MosaicIds['72C0212E67A08BCE'] },
]
