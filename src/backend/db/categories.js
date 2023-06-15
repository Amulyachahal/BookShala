import { v4 as uuid } from "uuid";
import fiction from "../../Images/Categories/fiction.jpg";
import nonfiction from "../../Images/Categories/nonfiction.jpg";
import horror from "../../Images/Categories/horror.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    image: fiction,
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image: nonfiction,
  },
  {
    _id: uuid(),
    categoryName: "horror",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: horror,
  },
];
