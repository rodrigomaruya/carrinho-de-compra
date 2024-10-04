export interface productsProps {
  id: number;
  title: string;
  thumbnail: string;
  price: string;
}

const formatar = (price: string, currency: string) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  });
  return formatter.format(Number(price));
};

export default formatar;
