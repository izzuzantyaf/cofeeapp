export type HomePageDataResponse = {
  status: string;
  result: {
    greeting: string;
    name: string;
    saldo: number;
    point: number;
    qrcode: string;
    banner: string[];
  };
};
