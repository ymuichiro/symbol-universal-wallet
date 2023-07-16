import { Button, H1, H3, Image, ListItem, Paragraph, ScrollView, Separator, Sheet, YGroup, YStack } from '@my/ui';
import { useState } from 'react';
import { Dimensions } from 'react-native';

export interface GameInfo {
  name: string;
  subTitle: string;
  description: string;
  link: string;
  icon: string;
}

export interface GameTabProps {
  items: GameInfo[];
}

export function GamesTab(props: GameTabProps): JSX.Element {
  return (
    <YStack f={1} padding="$4" space={'$4'}>
      <H1>Games</H1>
      <YGroup bordered separator={<Separator />}>
        {props.items.map((item, index) => (
          <GameItem key={index} {...item} />
        ))}
      </YGroup>
    </YStack>
  );
}

function GameItem(props: GameInfo): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPosition] = useState(0);
  const sheetContentWidth = Dimensions.get('window').width - 32;

  const handleOpenSheet = () => {
    setIsOpen(true);
  };

  return (
    <YGroup.Item>
      <ListItem
        hoverTheme
        pressTheme
        title={props.name}
        subTitle={props.subTitle}
        icon={<Image source={{ uri: props.icon, height: 100, width: 100 }} />}
        onPress={handleOpenSheet}
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
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <ScrollView showsHorizontalScrollIndicator={false} paddingBottom={'$8'}>
            <YStack f={1} ai="stretch" jc="flex-start" width={sheetContentWidth} space={'$4'}>
              <Image source={{ uri: props.icon, height: 250, width: sheetContentWidth }} borderRadius={'$4'} />
              <H3>{props.name}</H3>
              <Button accessibilityRole="link" href={props.link} target="_blank" rel="noreferrer noopener">
                PLAY
              </Button>
              <Paragraph>{props.description}</Paragraph>
            </YStack>
          </ScrollView>
        </Sheet.Frame>
      </Sheet>
    </YGroup.Item>
  );
}
