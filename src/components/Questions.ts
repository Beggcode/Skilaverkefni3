// Array of quiz questions
import type { Question } from "../types";

export const questions: Question[] = [
  {
    id: 1,
    question: "Hvað fá óþekkir krakkar hefðbundislega í skóinn?",
    options: [
      "Ávöxt",
      "Kartöflu",
      "Súkkulaði",
      "Innheimtukröfu"],
    correctIndex: 1
  },
  {
    id: 2,
    question: "Hvaða jólasvein kemur fyrst í heimsókn?",
    options: [
      "Gluggagæjir",
      "Kertasníkir",
      "Stekkjastaur",
      "Hurðaskellir"],
    correctIndex: 2
  },
  {
    id: 3,
    question: "Hvað gerir jólakötturinn?",
    options: [
      "Étur þá sem fá ný föt fyrir jólin",
      "Étur þá sem sofa ekki fyrir jólin",
      "Étur þá sem fá ekki ný föt fyrir jólin",
      "Étur allar jólagjafirnar"
    ],
    correctIndex: 2
  },
  {
    id: 4,
    question: "Hvaða drykkur er algengastur á jólahlaðborðum?",
    options: [
      "Malt og appelsín",
      "Romm og coke",
      "Hleðsla",
      "Tequila"],
    correctIndex: 0
  },
  {
    id: 5,
    question: "Hvað heitir móðir jólasveinanna?",
    options: [
      "Hólmfríður",
      "Grýla",
      "Jóna",
      "Margrét"],
    correctIndex: 1,
  },
  {
    id: 6,
    question: "Hvað heitir faðir jólasveinanna?",
    options: [
      "Stúfur",
      "Askasleikir",
      "Leppalúði",
      "Ketkrókur"],
    correctIndex: 2,
  },
  {
    id: 7,
    question: "Hvaða jólasvein kemur síðast í heimsókn?",
    options: [
      "Gáttaþefur",
      "Ketkrókur",
      "Kertasníkir",
      "Skyrgámur"],
    correctIndex: 2,
  },

];
