import { createElement } from "../lib/elements";
import styles from "./characterCard.module.css";

export default function createCharacterCard({
  imgSrc,
  name,
  status,
  species,
  lastKnownLocation,
  firstSeenIn,
}) {
  const characterCardElement = createElement(
    "article",
    { className: styles.card },
    [
      createElement("img", {
        src: imgSrc,
        className: styles.cardPicture,
        alt: "",
      }),
      createElement("h3", { className: styles.cardHeader }, [name]),
      createElement("span", { className: styles.cardSubtitle }, [
        status + " - " + species,
      ]),
      createElement("h4", { className: styles.cardSectionTitle }, [
        "Last known location:",
      ]),
      createElement("span", { className: styles.cardLocation }, [
        lastKnownLocation,
      ]),
      createElement("h4", { className: styles.cardSectionTitle }, [
        "First seen in:",
      ]),
      createElement("span", { className: styles.cardAppearance }, [
        firstSeenIn,
      ]),
    ]
  );

  return characterCardElement;
}
