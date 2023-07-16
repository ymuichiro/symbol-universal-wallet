import { YStack } from '@my/ui';
import { BalanceCurrencyCard } from '../components/BalanceCurrencyCard';
import { BalanceMosaicsCard } from '../components/BalanceMosaicsCard';
import { FavoriteActions } from '../components/FavoriteActions';

export interface WalletTabProps {
  address: string;
  networkType: 104 | 152;
  background: string;
  mosaics: { id: string; amount: number }[];
}

export function WalletTab(props: WalletTabProps): JSX.Element {
  return (
    <YStack padding="$4" space={'$8'}>
      <BalanceCurrencyCard networkType={props.networkType} address={props.address} background={props.background} />
      <FavoriteActions />
      <BalanceMosaicsCard networkType={props.networkType} address={props.address} mosaics={props.mosaics} />
    </YStack>
  );
}
