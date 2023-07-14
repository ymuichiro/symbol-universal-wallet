import { Button } from '@tamagui/button';
import { QrCode } from '@tamagui/lucide-icons';
import { XStack, YStack } from '@tamagui/stacks';
import { Paragraph } from '@tamagui/text';

interface Props {}

/**
 * Cards displaying frequently used actions
 */
export function FavoriteActions(props: Props): JSX.Element {
  const buttons = [
    {
      icon: QrCode,
      label: 'My QR',
      onpress: () => {},
    },
    {
      icon: QrCode,
      label: 'Receive',
      onpress: () => {},
    },
    {
      icon: QrCode,
      label: 'Read QR',
      onpress: () => {},
    },
  ];

  return (
    <XStack justifyContent="space-evenly" flexWrap="wrap">
      {buttons.map((button, index) => {
        return (
          <YStack key={index} alignItems="center">
            <Button icon={button.icon} circular onPress={button.onpress} />
            <Paragraph theme="alt1" size={'$1'}>
              {button.label}
            </Paragraph>
          </YStack>
        );
      })}
    </XStack>
  );
}
