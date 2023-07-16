import { AccountInfoDTO, AccountRoutesApi, Configuration } from 'symbol-rest';

// 型は v2 みたいに生成されています。
type Sample = AccountInfoDTO;

/** TODO: 後で消す */
export function sampleScript() {
  const config = new Configuration({
    basePath: 'http://api-01.ap-northeast-1.testnet.symboldev.network:3000',
  });

  const accountRoutesApi = new AccountRoutesApi(config);

  // このように関数で実行できます。定義ファイルはこれを使っています。https://symbol.github.io/symbol-openapi/v1.0.4/
  accountRoutesApi.getAccountInfo({ accountId: 'XXXXXXXXXXXXXX' }).then((e) => {
    console.log(e);
  });
}
