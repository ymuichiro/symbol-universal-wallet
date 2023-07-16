import { YGroup } from '@tamagui/group';
import { ListItem } from '@tamagui/list-item';
import { CheckCircle, Circle, Languages } from '@tamagui/lucide-icons';
import { ScrollView } from '@tamagui/scroll-view';
import { Sheet } from '@tamagui/sheet';
import { YStack } from '@tamagui/stacks';
import { H3 } from '@tamagui/text';
import { useState } from 'react';

export function SettingsItemLang(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPosition] = useState(0);

  return (
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title="Language"
        subTitle="Change the language"
        onPress={() => setIsOpen(true)}
        icon={Languages}
      />
      <Sheet
        modal
        open={isOpen}
        onOpenChange={setIsOpen}
        snapPoints={[90]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame padding="$4">
          <Sheet.Handle />
          <ScrollView f={1} showsHorizontalScrollIndicator={false} paddingBottom={'$8'}>
            <YStack f={1} ai="stretch" jc="flex-start" space={'$4'}>
              <H3 textAlign="left">Language</H3>
              <YGroup.Item>
                <ListItem hoverTheme pressTheme title={'english'} icon={CheckCircle} />
                <ListItem hoverTheme pressTheme title={'japanese（準備中）'} icon={Circle} />
              </YGroup.Item>
            </YStack>
          </ScrollView>
        </Sheet.Frame>
      </Sheet>
    </YGroup.Item>
  );
}
