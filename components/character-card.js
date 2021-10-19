import { createElement } from "../lib/elements";
import styles from "./characterCard.module.css";

export default function createCharacterCard({ name, location, appearance }) {
  const characterCardElement = createElement(
    "article",
    { className: styles.card },
    [
      createElement("img", {
        src: "./components/Bepisian.jpeg",
        className: styles.cardPicture,
        alt: "",
      }),
      createElement("div", { className: styles.cardText }, [
        createElement("h2", { className: styles.cardHeader }, [name]),
        createElement("h4", { className: styles.cardSubtitle }, [
          "Alive - Alien",
        ]),
        createElement("span", { className: styles.cardSectionTitle }, [
          "Last known location:",
        ]),
        createElement("h3", { className: styles.cardLocation }, [location]),
        createElement("span", { className: styles.cardSectionTitle }, [
          "First seen in:",
        ]),
        createElement("h3", { className: styles.cardAppearance }, [appearance]),
      ]),
    ]
  );

  return characterCardElement;
}
