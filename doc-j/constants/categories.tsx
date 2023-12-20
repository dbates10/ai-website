import { Category } from "../app/models/interfaces";
import {
  docJProducts,
  mogleeProducts,
  waterbearProducts,
  gamblesProducts,
} from "./products";

export const categories: Category[] = [
  {
    id: "docj",
    name: "Doc J's Laboratory",
    slug: "docj",
    description: [
      "Doc J’s Laboratory is my pride and joy. The Laboratory is my vessel for showcasing my team and my friends’ most highly regarded projects. Each drop from Doc J’s Laboratory is the culmination of months if not years of work. Dialing in a holistic and enjoyable experience for the consumer takes a lot of time, care, and passion.  We could not rush this process if we tried.",
      "I work with top tier genetics from some of the best breeders in the world. Collaboration with my friends and peers is a big part of what I share with you. I believe that we can work together and achieve more than we could have dreamed of individually. Each company or artisan that we work with is credited on the jar and product page. I couldn’t do this without a little help from my friends.",
      " Enjoy this flower that I grew with my best friends. It’s as simple as that.- Doc J",
    ],
    heroImage: "/doc/hero.jpg",
    heroImageAlt: "Doc J's Laboratory category image",
    logoImage: "/logos/docj.svg",
    logoImageAlt: "Doc J Logo",
    products: docJProducts,
  },
  {
    id: "moglee",
    name: "Moglee Cultivated",
    slug: "moglee",
    description: [
      "Moglee is one of my best friends and it just so happens that he grows the best cannabis that I’ve ever tried. I finally convinced him to share his gift with the world. With 15 years of experience cultivating and breeding cannabis outdoors and indoors in Virginia, Moglee brings a one of a kind experience to consumers, growers, and breeders alike.",
      " I have worked with Moglee to cultivate some of the best batches of boutique indoor flower that the east coast has ever seen. Moglee has taken some of the biggest genetic releases from the biggest companies over the past few years and cultivated them to their peak potential. He has so many phenotypes, crosses, and special batches to share with all of you and you should feel absolutely blessed. Stay tuned for new cultivation projects, breeding projects, clone drops and seed drops.",
      " Moglee. Remember the name. -Doc J",
    ],
    heroImage: "/moglee/hero.jpg",
    heroImageAlt: "Moglee Cultivated category image",
    logoImage: "/logos/moglee.jpeg",
    logoImageAlt: "Moglee Cultivated Logo",

    products: mogleeProducts,
  },
  {
    id: "waterbear",
    name: "Waterbear Farms",
    slug: "waterbear",
    description: [
      "Waterbear Farms is a passion project of mine that I began in early 2023. I was getting sick of seeing downright unsafe vaporizers on the street. Consumers have been subject to falsified testing documents, contaminated product, synthetic products, and fake terpenes for far too long. My goal with Waterbear farms was simply to bring clean vaporizers to the common consumer. We have since expanded to offer Waterbear flower and concentrates as well.",
      " You shouldn’t have to pay an arm and a leg for clean safe cannabis products. We have formed solid partnerships with 2 separate partner facilities to achieve this goal. Every Waterbear Farms product is cultivated, processed, and packaged here on the East Coast by our team. Every product is tested for impurities and everything is single source. Single source means that everything is grown, processed, and packaged in the same facility.",
      " Waterbear is for everyone: for the first time smoker or the connoisseur like myself- Doc J",
    ],
    heroImage: "/waterbear/hero.jpg",
    heroImageAlt: "Waterbear Farms category image",
    logoImage: "/logos/waterbear.jpg",
    logoImageAlt: "Waterbear Farms Logo",

    products: waterbearProducts,
  },
  {
    id: "gambles",
    name: "Gamble's Goods",
    slug: "gambles",
    description: [
      "I approached my longtime friend Gamble about a cannabis company while we were in Hollywood in late 2022. We had both been in the industry for years and had worked closely together sourcing flower to our respective markets. Gamble took the opportunity in stride and we locked in with no time to look back.",
      " Gamble and I have worked together to build what I consider to be the best curation of price point cannabis in Virginia. We source all Gamble’s Goods products from trusted partner farms and laboratories that we trust. Every item has passed testing for contaminants such as heavy metals, pesticides, mold, and other contaminants. Everything is completely safe and healthy to consume.",
      " Gamble has something for everyone: from the weekend warrior to the seasoned veteran. Gamble’s Goods is anything but a gamble. - Doc J",
    ],
    heroImage: "/gambles/hero.jpg",
    heroImageAlt: "Gamble's Goods category image",
    logoImage: "/logos/gambles.jpg",
    logoImageAlt: "Gamble's Goods Logo",
    products: gamblesProducts,
  },
];
