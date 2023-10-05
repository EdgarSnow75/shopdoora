import Apple from "../../public/Products/Apple.jpg";
import Mint from "../../public/Products/Mint.jpg";
import Sea from "../../public/Products/SEA FRESHNESS.jpg";
import Coffee from "../../public/Products/Coffee.jpg";
import Honey from "../../public/Products/Honey.jpg";
import Raspberry from "../../public/Products/Raspberry.jpg";

export const HeroData = [
  {
    id: 1,
    trait: "The Best Look",
    title: "Anytime Anywhere",
    price: 10000,
  },
  {
    id: 2,
    trait: "Lighter Than Feather",
    title: "Pocket Vaping Intensifies",
    price: 6000,
  },
  {
    id: 3,
    trait: "Chef In Town",
    title: "Taste the best",
    price: 12000,
  },
  {
    id: 4,
    trait: "Le Premium ",
    title: "The Best we have to offer",
    price: 26000,
  },
];

export interface ProductDataType {
  id: number;
  productName: string;
  productImg: string;
  desc: string;
  price: number;
  points: number;
  discount: number;
}

export const ProductData = [
  {
    id: "P01",
    productName: "Calliope",
    productImg: Raspberry,
    desc: "Flavor of Death",
    price: 45000,
    points: 666,
    discount: 0.25,
  },
  {
    id: "P02",
    productName: "Suisei",
    productImg: Sea,
    desc: "Your Shooting Star",
    price: 45000,
    points: 545,
    discount: 0.25,
  },
  {
    id: "P03",
    productName: "Nerissa",
    productImg: Honey,
    desc: "Unhinged",
    price: 35000,
    points: 500,
    discount: 0.4,
  },
  {
    id: "P04",
    productName: "Towa",
    productImg: Mint,
    desc: "TMT",
    price: 40000,
    points: 666,
    discount: 0.25,
  },
  {
    id: "P05",
    productName: "ReGLOSS",
    productImg: Coffee,
    desc: "Seiso Idols",
    price: 50000,
    points: 800,
    discount: 0.2,
  },
  {
    id: "P06",
    productName: "Kiara",
    productImg: Apple,
    desc: "KFP",
    price: 42000,
    points: 625,
    discount: 0.3,
  },
];
