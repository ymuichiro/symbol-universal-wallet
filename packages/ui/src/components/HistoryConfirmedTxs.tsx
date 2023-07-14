interface Props {
  mosaic: {
    id: string;
    amount: number;
  };
  address: {
    from: string;
  };
  date: Date;
  type: string;
  message: string;
  hash: string;
}

export function HistoryConfirmedTxs(props: Props): JSX.Element {
  return (
    <>
      {/* {new Array(30).fill(null).map((_, i) => {
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
      })} */}
    </>
  );
}
