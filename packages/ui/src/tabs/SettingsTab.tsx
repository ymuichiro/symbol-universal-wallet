import { YGroup } from '@tamagui/group';
import { ListItem } from '@tamagui/list-item';
import { Languages, Network, Wallet } from '@tamagui/lucide-icons';
import { ScrollView } from '@tamagui/scroll-view';
import { Separator } from '@tamagui/separator';
import { YStack } from '@tamagui/stacks';
import { useState } from 'react';
import { SettingsItemAccounts } from '../components/SettingsItemAccounts';
import { SettingsItemLang } from '../components/SettingsItemLang';
import { SettingsItemNetwork } from '../components/SettingsItemNetwork';
import { SheetBase } from '../components/SheetBase';

export interface SettingsTabProps {
  address: string;
  networkType: 104 | 152;
}

export function SettingsTab(props: SettingsTabProps): JSX.Element {
  const [sheetElement, setSheetElement] = useState<JSX.Element | null>(null);

  const handleCloseSheet = () => {
    setSheetElement(null);
  };

  return (
    <YStack padding="$4" space={'$8'}>
      <YGroup bordered size="$4" separator={<Separator />}>
        {[
          {
            name: 'Language',
            subTitle: 'Change the language',
            icon: Languages,
            onPress: () => {
              setSheetElement(<SettingsItemLang sheetName="Language" />);
            },
          },
          {
            name: 'Network',
            subTitle: 'Change the blockchain network',
            icon: Network,
            onPress: () => {
              setSheetElement(<SettingsItemNetwork sheetName="Network" />);
            },
          },
          {
            name: 'Accounts',
            subTitle: 'Change the current account',
            icon: Wallet,
            onPress: () => {
              setSheetElement(<SettingsItemAccounts sheetName="Accounts" />);
            },
          },
        ].map((item, index) => (
          <YGroup.Item key={index}>
            <ListItem
              hoverTheme
              pressTheme
              title={item.name}
              subTitle={item.subTitle}
              onPress={item.onPress}
              icon={item.icon}
            />
          </YGroup.Item>
        ))}
      </YGroup>
      <SheetBase isOpen={Boolean(sheetElement)} onOpenChange={handleCloseSheet}>
        <ScrollView f={1} showsHorizontalScrollIndicator={false} paddingHorizontal={'$4'} paddingBottom={'$8'}>
          {sheetElement}
        </ScrollView>
      </SheetBase>
    </YStack>
  );
}
