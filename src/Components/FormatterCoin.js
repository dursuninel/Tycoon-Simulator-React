const formatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
});

export const formatCoin = (coin) => {
  return formatter.format(coin);
};
