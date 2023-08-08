import dynamic from 'next/dynamic';
import Head from 'next/head';

const TestScreen = dynamic(() => import('app/features/home/test').then((e) => e.TestScreen), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export default function Page() {
  return (
    <>
      <Head>
        <title>TestScreen</title>
      </Head>
      <TestScreen />
    </>
  );
}
