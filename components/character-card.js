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
  const firstEpisode = episode[0];
  const locationUrl = location.url;

  const firstEpisodeElement = createElement(
    "span",
    { className: styles.cardAppearance },
    [firstEpisode]
  );

  const lastLocationElement = createElement(
    "span",
    { className: styles.cardLocation },
    [locationUrl]
  );

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
      lastLocationElement,
      createElement("h4", { className: styles.cardSectionTitle }, [
        "First seen in:",
      ]),
      firstEpisodeElement,
    ]
  );

  fetch(firstEpisode)
    .then((response) => response.json())
    .then((body) => {
      firstEpisodeElement.textContent = body.name;
    });

  fetch(locationUrl)
    .then((response) => response.json())
    .then((body) => {
      lastLocationElement.textContent = body.type + " " + body.name;
    });

  return characterCardElement;
}
