## メモ

### 各種エラー

1. `<Card elevate bordered animation={'bouncy'} hoverStyle={{ scale: 0.925 }} pressStyle={{ scale: 0.875 }}>` とした際に以下のようなエラーが発生

解決方法見出せず、 animation={"bouncy"} は削除とした。 tamagui バージョンアップ後に再トライ予定。

```
Warning: Cannot update a component (`H2`) while rendering a different component (`ForwardRef(Card)`). To locate the bad setState() call inside `ForwardRef(Card)`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
```
