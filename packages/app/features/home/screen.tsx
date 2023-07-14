import {
  BalanceCurrencyCard,
  BalanceMosaicsCard,
  FavoriteActions,
  Image,
  ListItem,
  ScrollView,
  Separator,
  SizableText,
  Tabs,
  YGroup,
  YStack,
} from '@my/ui';
import { ChevronRight, Gamepad2, History, Settings, Wallet } from '@tamagui/lucide-icons';
import LogoIsekaitensei from 'app/assets/icons/logo-isekaitensei.jpg';
import LogoSymbolLine from 'app/assets/icons/logo-symbol-line.png';
import LogoTheTower from 'app/assets/icons/logo-the-tower.png';
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { useLink } from 'solito/link';

const ADDRESS = 'NDKPZZKCKHSXOZ7Q6B6JICUOSBNV5GTZIOBCO3I';

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  });

  const [height, setHeight] = useState<number>(Dimensions.get('window').height);

  useEffect(() => {
    const _event = Dimensions.addEventListener('change', (e) => {
      setHeight(e.window.height);
    });
    return () => {
      _event.remove();
    };
  }, []);

  return (
    <YStack f={1}>
      <Tabs
        defaultValue="wallet"
        orientation="horizontal"
        flexDirection="column"
        overflow="hidden"
        borderColor="$borderColor"
      >
        <Tabs.Content value="wallet">
          <ScrollView style={{ height: height, paddingBottom: 100 }}>
            <WalletTab />
          </ScrollView>
        </Tabs.Content>
        <Tabs.Content value="history">
          <ScrollView style={{ height: height, paddingBottom: 100 }}>
            <HistoryTab />
          </ScrollView>
        </Tabs.Content>
        <Tabs.Content value="games">
          <GamesTab />
        </Tabs.Content>
        <Tabs.Content value="settings">sem</Tabs.Content>
        <Tabs.List
          f={1}
          disablePassBorderRadius="bottom"
          borderTopWidth="$0.5"
          borderTopColor="$borderColor"
          style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            left: 0,
          }}
        >
          <Tabs.Tab value="wallet" f={1} height={'$5'}>
            <YStack ai={'center'}>
              <Wallet />
              <SizableText theme="alt1" size="$1">
                wallet
              </SizableText>
            </YStack>
          </Tabs.Tab>
          <Tabs.Tab value="history" f={1} height={'$5'}>
            <YStack ai={'center'}>
              <History />
              <SizableText theme="alt1" size="$1">
                history
              </SizableText>
            </YStack>
          </Tabs.Tab>
          <Tabs.Tab value="games" f={1} height={'$5'}>
            <YStack ai={'center'}>
              <Gamepad2 />
              <SizableText theme="alt1" size="$1">
                games
              </SizableText>
            </YStack>
          </Tabs.Tab>
          <Tabs.Tab value="settings" f={1} height={'$5'}>
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
  );
}

function WalletTab(): JSX.Element {
  return (
    <YStack padding="$4" space={'$8'}>
      <BalanceCurrencyCard networkType={152} address={ADDRESS} background={LogoSymbolLine.src} />
      <FavoriteActions />
      <BalanceMosaicsCard
        networkType={152}
        address={ADDRESS}
        mosaics={new Array(30).fill(null).map(() => ({ id: 'symbol.xym', amount: 1000000 }))}
      />
    </YStack>
  );
}

function HistoryTab(): JSX.Element {
  return (
    <Tabs
      defaultValue="all"
      flexDirection="column"
      orientation="horizontal"
      borderWidth="$0.25"
      overflow="hidden"
      borderColor="$borderColor"
    >
      <Tabs.List separator={<Separator vertical />} disablePassBorderRadius="bottom">
        <Tabs.Tab f={1} value="all">
          <SizableText>All</SizableText>
        </Tabs.Tab>
        <Tabs.Tab f={1} value="unsigned">
          <SizableText>UnSigned</SizableText>
        </Tabs.Tab>
        <Tabs.Tab f={1} value="unconfirmed">
          <SizableText>UnConfirmed</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Content f={1} value="all">
        <YStack f={1} ai="center" jc="center">
          {new Array(30).fill(null).map((_, i) => {
            return (
              <ListItem
                key={i}
                hoverTheme
                pressTheme
                title="トランザクション"
                subTitle="Subtitle"
                icon={History}
                iconAfter={ChevronRight}
              />
            );
          })}
        </YStack>
      </Tabs.Content>
      <Tabs.Content value="unsigned">
        <YStack f={1} ai="center" jc="center">
          {new Array(30).fill(null).map((_, i) => {
            return (
              <ListItem
                key={i}
                hoverTheme
                pressTheme
                title="未署名トランザクション"
                subTitle="Subtitle"
                icon={History}
                iconAfter={ChevronRight}
              />
            );
          })}
        </YStack>
      </Tabs.Content>
      <Tabs.Content value="unconfirmed">
        <YStack f={1} ai="center" jc="center">
          {new Array(30).fill(null).map((_, i) => {
            return (
              <ListItem
                key={i}
                hoverTheme
                pressTheme
                title="未承認トランザクション"
                subTitle="Subtitle"
                icon={History}
                iconAfter={ChevronRight}
              />
            );
          })}
        </YStack>
      </Tabs.Content>
    </Tabs>
  );
}

function GamesTab(): JSX.Element {
  return (
    <YStack padding="$4" space={'$8'}>
      <YGroup alignSelf="center" bordered size="$5" separator={<Separator />}>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            title={'The Tower'}
            subTitle={"Why climb? Because that's where the tower is."}
            icon={<Image source={{ uri: LogoTheTower.src, height: 100, width: 100 }} />}
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            title={'異世界転生したら法定通貨がXYMだった件'}
            subTitle={'All-player cooperative online RPG'}
            icon={<Image source={{ uri: LogoIsekaitensei.src, height: 100, width: 100 }} />}
          />
        </YGroup.Item>
      </YGroup>
    </YStack>
  );
}
