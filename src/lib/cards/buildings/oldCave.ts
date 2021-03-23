import {
  CARD_TARGET_NEW,
  CardDef,
  TARGET_ALLIES,
} from "../../objects/definitions/card"

const card: CardDef = {
  name: "Old Cave",
  cost: 6,
  rarity: "silver",
  type: "building",
  image: "oldCave",
  description: "Place that only fool can visit alone.",
  props: {
    fraction: "Monsters",
    health: 1,
    statuses: [
      {
        type: "immunity",
        against: "all",
        text: "Can't be attacked",
      },
    ],
    deathType: "building",
    onTurnEnd: [
      {
        text: "When you play [goblin|highlight], [boost|positive] it by 1.",
        name: "boost",
        targets: {
          side: TARGET_ALLIES,
          card: CARD_TARGET_NEW,
          guild: "goblin",
        },
        count: 1,
        value: 1,
      },
      {
        text: "[Heal|positive] random allied [beast|highlight] by 1.",
        name: "boost",
        targets: {
          side: TARGET_ALLIES,
          card: CARD_TARGET_NEW,
          guild: "beast",
        },
        random: true,
        count: 1,
        value: 1,
      },
    ],
  },
}

export default card
