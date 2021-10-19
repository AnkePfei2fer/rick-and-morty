import { createElement } from "../lib/elements";
import styles from "./characterCard.module.css";

const cardHeader = createElement("h1", { className: styles.cardHeader }, [
  "Bepisian",
]);
const cardSubtitle = createElement("h4", { className: styles.cardSubtitle }, [
  "Alive - Alien",
]);

const cardSectionTitleLocation = createElement(
  "span",
  { className: styles.cardSectionTitle },
  ["Last known location:"]
);

const cardLocation = createElement("h3", { className: styles.cardLocation }, [
  "Bepis 9",
]);

const cardSectionTitleAppearence = createElement(
  "span",
  { className: styles.cardSectionTitle },
  ["First seen in:"]
);

const cardAppearance = createElement("h3", { className: styles.cardLocation }, [
  "Pilot",
]);

export default function createCharacterCard() {
  const characterCardElement = createElement(
    "article",
    { className: styles.card },
    [
      cardHeader,
      cardSubtitle,
      cardSectionTitleLocation,
      cardLocation,
      cardSectionTitleAppearence,
      cardAppearance,
    ]
  );

  return characterCardElement;
}
