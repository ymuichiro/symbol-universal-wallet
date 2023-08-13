import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const GetTreasure = dynamic(() => import('app/features/gacha/getTreasure').then((e) => e.GetTreasure), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export default function GachatSendPage() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!router.isReady) return;
    setIsLoaded(true);
    
  }, [router.isReady, router.query]);
  return (
    <>
      <Head>
        <title>GetTreasure</title>
      </Head>
      {isLoaded && <GetTreasure payload={router.query.signed_payload as string} />}
    </>
  );
}
