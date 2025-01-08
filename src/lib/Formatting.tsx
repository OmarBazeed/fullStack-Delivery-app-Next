const FormatCurrency = ({
  value,
  currency,
  locale,
}: {
  value: number;
  currency: string;
  locale: string;
}) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
};
export { FormatCurrency };
