import {
  Button,
  Card,
  H2,
  Image,
  Paragraph,
  Sheet,
  SizableText,
  Tabs,
  View,
  XStack,
  YStack,
  useToastController,
} from '@my/ui'
import { ChevronDown, ChevronUp, Gamepad2, History, Settings, Wallet } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1}>
      <Tabs
        defaultValue="tab1"
        orientation="horizontal"
        flexDirection="column"
        overflow="hidden"
        borderColor="$borderColor"
      >
        <Tabs.Content value="tab1">
          <View padding="$4">
            <Card
              elevate
              bordered
              animation={'bouncy'}
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.875 }}
            >
              <Card.Header padded>
                <H2>MAIN-NET</H2>
                <Paragraph>NDKPZZKCKHSXOZ7Q6B6JICUOSBNV5GTZIOBCO3I</Paragraph>
              </Card.Header>
              <Card.Footer>
                <Card.Footer padded>
                  <XStack flex={1} />
                  <Button borderRadius="$10">Purchase</Button>
                </Card.Footer>
              </Card.Footer>
              <Card.Background>
                <Image
                  source={{
                    uri: 'https://github.com/ymuichiro/symbol_japan_forum/blob/main/logo/cc_0/Symbol_Logo_one_color_dark_BG-01.png?raw=true',
                  }}
                  width={'100%'}
                  height={'100%'}
                  opacity={0.1}
                />
              </Card.Background>
            </Card>
          </View>
        </Tabs.Content>
        <Tabs.Content value="tab2">sam</Tabs.Content>
        <Tabs.Content value="tab3">ham</Tabs.Content>
        <Tabs.Content value="tab4">sem</Tabs.Content>
        <Tabs.List
          f={1}
          disablePassBorderRadius="bottom"
          borderTopWidth="$-0.25"
          borderTopColor="$borderColor"
          style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            left: 0,
          }}
        >
          <Tabs.Tab value="tab1" f={1} height={'$5'}>
            <YStack ai={'center'}>
              <Wallet />
              <SizableText theme="alt1" size="$1">
                wallet
              </SizableText>
            </YStack>
          </Tabs.Tab>
          <Tabs.Tab value="tab2" f={1} height={'$5'}>
            <YStack ai={'center'}>
              <History />
              <SizableText theme="alt1" size="$1">
                history
              </SizableText>
            </YStack>
          </Tabs.Tab>
          <Tabs.Tab value="tab3" f={1} height={'$5'}>
            <YStack ai={'center'}>
              <Gamepad2 />
              <SizableText theme="alt1" size="$1">
                games
              </SizableText>
            </YStack>
          </Tabs.Tab>
          <Tabs.Tab value="tab4" f={1} height={'$5'}>
            <YStack ai={'center'}>
              <Settings />
              <SizableText theme="alt1" size="$1">
                Setting
              </SizableText>
            </YStack>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
