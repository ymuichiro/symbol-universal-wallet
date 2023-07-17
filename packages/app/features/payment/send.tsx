import { AlertDialog, Button, Input, Label, Paragraph, ScrollView, SizableText, Switch, XStack, YStack } from '@my/ui';
import { ArrowLeft } from '@tamagui/lucide-icons';
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { useLink } from 'solito/link';

export function PaymentSendScreen(): JSX.Element {
  const [height, setHeight] = useState<number>(Dimensions.get('window').height);
  const linkProps = useLink({
    href: '/',
  });

  useEffect(() => {
    const _event = Dimensions.addEventListener('change', (e) => {
      setHeight(e.window.height);
    });
    return () => {
      _event.remove();
    };
  }, []);

  return (
    <ScrollView f={1} style={{ height, paddingBottom: 100 }}>
      <YStack padding="$4" space="$2">
        <XStack alignItems="center">
          <Button {...linkProps} chromeless icon={ArrowLeft} circular />
          <SizableText>Home</SizableText>
        </XStack>
        <YStack>
          <Label paddingLeft="$1" htmlFor="address">
            Address
          </Label>
          <Input id="address" placeholder="address" />
        </YStack>
        <YStack>
          <Label paddingLeft="$1" htmlFor="mosaic">
            Mosaic
          </Label>
          <Input id="mosaic" placeholder="mosaic" />
        </YStack>
        <YStack>
          <Label paddingLeft="$1" htmlFor="amount">
            Amount
          </Label>
          <Input id="amount" placeholder="amount" />
        </YStack>
        <YStack>
          <Label paddingLeft="$1" htmlFor="message">
            Message
          </Label>
          <Input id="message" placeholder="message" multiline rows={4} />
        </YStack>
        <XStack alignItems="center" space="$4">
          <Label paddingRight="$0" justifyContent="flex-end" htmlFor="encrypt">
            Encrypt
          </Label>
          <Switch id="encrypt" size={'$2'}>
            <Switch.Thumb animation={'quick'} />
          </Switch>
        </XStack>
        <YStack justifyContent="center" padding="$4">
          <CheckDialog />
        </YStack>
      </YStack>
    </ScrollView>
  );
}

function CheckDialog(): JSX.Element {
  return (
    <AlertDialog native>
      <AlertDialog.Trigger asChild>
        <Button themeInverse>SUBMIT</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack space>
            <AlertDialog.Title>Accept</AlertDialog.Title>
            <AlertDialog.Description>
              <YStack space={'$4'}>
                <YStack>
                  <Paragraph size="$4">Address</Paragraph>
                  <SizableText theme="alt1">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</SizableText>
                </YStack>
                <YStack>
                  <Paragraph size="$4">Mosaic</Paragraph>
                  <SizableText theme="alt1">symbol.xym</SizableText>
                </YStack>
                <YStack>
                  <Paragraph size="$4">Message</Paragraph>
                  <SizableText theme="alt1">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</SizableText>
                </YStack>
                <YStack>
                  <Paragraph size="$4">Encrypt</Paragraph>
                  <SizableText theme="alt1">on</SizableText>
                </YStack>
              </YStack>
            </AlertDialog.Description>
            <XStack space="$3" justifyContent="flex-end">
              <AlertDialog.Cancel asChild>
                <Button>Cancel</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button theme="active">Accept</Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}
