import { YGroup } from '@tamagui/group';
import { Separator } from '@tamagui/separator';
import { YStack } from '@tamagui/stacks';
import { SettingsItemAccounts } from '../components/SettingsItemAccounts';
import { SettingsItemLang } from '../components/SettingsItemLang';
import { SettingsItemNetwork } from '../components/SettingsItemNetwork';

export interface SettingsTabProps {
  address: string;
  networkType: 104 | 152;
}

export function SettingsTab(props: SettingsTabProps): JSX.Element {
  return (
    <YStack padding="$4" space={'$8'}>
      <YGroup bordered size="$4" separator={<Separator />}>
        <SettingsItemLang />
        <SettingsItemNetwork />
        <SettingsItemAccounts />
      </YGroup>
    </YStack>
  );
}
