import deviceImg from "../../public/Products/devices.png";
import podImg from "../../public/Products/pod.png";
import dispoImg from "../../public/Products/disposable.webp";

export const MembershipDealsData = [
  {
    id: "M01",
    membershipName: "Default",
    desc: "Be a Vape Pi member and get our special exclusive offers",
    price: 40,
  },
  {
    id: "M02",
    membershipName: "Special",
    desc: "Be a VI Pi and join our exculsive club",
    price: 100,
  },
];

export interface CategoryDataType {
  id: number;
  categoryName: string;
  categoryImg: string;
  desc: string;
}

export const CategoryData = [
  {
    id: "C01",
    categoryName: "Devices",
    categoryImg: deviceImg,
    desc: "Find the best for you here!",
  },
  {
    id: "C02",
    categoryName: "Pods",
    categoryImg: podImg,
    desc: "Variety of choices available",
  },
  {
    id: "C03",
    categoryName: "Disposable",
    categoryImg: dispoImg,
    desc: "Easy, clean & superb flavor",
  },
];

export interface NewFlavoursType {
  id: number;
  flavorName: string;
  desc: string;
}
export const NewFlavorsData = [
  {
    id: "N01",
    flavorName: "Citrus Monster",
    desc: "Try New Flavor",
  },
  {
    id: "N02",
    flavorName: "Sea Freshness",
    desc: "Breeze of the Ocean",
  },
  {
    id: "N03",
    flavorName: "Apple",
    desc: "Classic Reinvented",
  },
];
