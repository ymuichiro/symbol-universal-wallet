import { H1, Input, View, YStack, Label } from '@my/ui';
import { Button } from '@tamagui/button';
import CoinAnimation from 'app/assets/jsons/coin.json';
import PresentAnimation from 'app/assets/jsons/present.json';
import Lottie from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { TransactionService } from 'symbol';

interface PaymentActionAnnounceProps {
  payload: string;
}
// nodeUrlはBrowserStorageから取得する
const node = "https://mikun-testnet.tk:3001";

export function GetTreasure(props: PaymentActionAnnounceProps) {
  const [hash, setHash] = useState<string>('');
  const [animationState, setAnimationState] = useState<'wait' | 'present' | 'get' | 'fail'>('wait');
  const [sendResult, setSentResult] = useState<string | null>(null);
  const [tryGetTreasure, setTryGetTreasure] = useState<string | null>(null);

  useEffect(() => {
    try {
      if(props.payload === undefined) {
        setAnimationState('present');
        return;
      }
      // トランザクション送信処理
      TransactionService.announceTransaction(node, props.payload).then((result)=>{
        if (result.error) {
          // 失敗したら sheet modal を表示
          console.error(result.error);
        } else {
          // 成功したら Hashをセットし検証用ボタン（Get）を表示
          setHash(result.hash);
          setAnimationState('present');
        }
      });
    } catch (err) {
      setSentResult(null);
      console.error(err);
    }
  }, []);

  const handleGetTreasure = async () => {
    setTryGetTreasure('waiting ...')
    const res = await TransactionService.getTreasure(node, hash)
    setTryGetTreasure(null)
    if(res.message.error) {
      setSentResult(res.message.error)
      setAnimationState('fail')
    } else {
      setSentResult(res.message.hash)
      setAnimationState('get')
    }
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
        {animationState === 'wait' && (
            <p style={{margin: '30px'}}>Signed transaction being sent.</p>
        )}
        {sendResult && <Label style={{margin: '0 auto', width: '100%'}}>{sendResult}</Label>}
        {animationState === 'present' && (
            <Lottie source={PresentAnimation} autoPlay loop style={{ height: 300, width: 300, margin:'0 auto' }} />
        )}
        {animationState === 'get' && (
          <Lottie source={CoinAnimation} autoPlay loop style={{ height: 300, width: 300 }} />
        )}
      </View>
      { tryGetTreasure && <div>{tryGetTreasure}</div>}
      {animationState === 'present' && (<Input placeholder="Transaction Hash" width={650} value={hash} onChangeText={setHash} marginBottom={10} />)}
      {animationState === 'present' && <Button onPress={handleGetTreasure}>Get Treasure</Button>}
    </YStack>
  );
}
