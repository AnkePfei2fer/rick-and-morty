import { createElement } from "../lib/elements";
import styles from "./characterCard.module.css";

export default function createCharacterCard({
  image,
  name,
  status,
  species,
  location,
  episode,
}) {
  episode = episode[0];
  location = location.name;

  const characterCardElement = createElement(
    "article",
    { className: styles.card },
    [
      createElement("img", {
        src: image,
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
      createElement("span", { className: styles.cardLocation }, [location]),
      createElement("h4", { className: styles.cardSectionTitle }, [
        "First seen in:",
      ]),
      createElement("span", { className: styles.cardAppearance }, [episode]),
    ]
  );

  return characterCardElement;
}
