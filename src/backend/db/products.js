import { v4 as uuid } from "uuid";
import youcanwin from "../../Images/products/youcanwin.jpg";
import youarewinner from "../../Images/products/youarewinner.jpg";
import thinkandgrowrich from "../../Images/products/thinkandgrowrich.jpg";
import intothedark from "../../Images/products/intothedark.jpg";
import blackforest from "../../Images/products/blackforest.jpg";
import theshadowonthewall from "../../Images/products/theshadowonthewall.jpg";
import divergent from "../../Images/products/divergent.jpg";
import tfios from "../../Images/products/tfios.jpg";
import theperfectnanny from "../../Images/products/theperfectnanny.jpg";
import lawsofpower from "../../Images/products/lawsofpower.jpg";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: youcanwin,

    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    image: youarewinner,

    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    image: thinkandgrowrich,

    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "700",
    categoryName: "fiction",
  },

  {
    _id: uuid(),
    image: intothedark,

    title: "Into the Dark",
    author: "CJ LOUGHTY",
    price: "450",
    categoryName: "horror",
  },

  {
    _id: uuid(),
    image: blackforest,

    title: "BLACK FOREST",
    author: "SHANE LEE",
    price: "650",
    categoryName: "horror",
  },

  {
    _id: uuid(),
    image: theshadowonthewall,

    title: "THE SHADOW ON THE WALL",
    author: "RUSKIN BOND",
    price: "700",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    image: divergent,

    title: "DIVERGENT",
    author: "VERONICA ROTH",
    price: "500",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    image: tfios,

    title: "THE FAULT IN OUR STARS",
    author: "JOHN GREEN",
    price: "700",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    image: theperfectnanny,

    title: "THE PERFECT NANNY",
    author: "LEILA SLIMANI",
    price: "870",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    image: lawsofpower,

    title: "48 LAWS OF POWER",
    author: "Robert Greene",
    price: "2500",
    categoryName: "non-fiction",
  },
];
