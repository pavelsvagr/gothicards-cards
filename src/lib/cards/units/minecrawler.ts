import { CardDefinition } from '../../definitions'
import {
  AttackTypes,
  CardRarity,
  CardType,
  EffectTypes,
  Fractions,
  Guilds,
  Sides,
  Signs,
} from '../../enums'
import descriptions from '../texts/units'
import { RichTextStyle } from '../../formatting'

const card: CardDefinition = {
  type: CardType.Unit,
  name: 'Minecrawler',
  slug: 'minecrawler',
  rarity: CardRarity.Bronze,
  cost: 5,
  fraction: Fractions.Monsters,
  description: descriptions.minecrawler,
  attributes: {
    guilds: [Guilds.Insect],
    defence: 1,
    health: 3,
    armor: 1,
    attacks: [
      {
        type: AttackTypes.Melee,
        text: 'Slash',
        cost: 1,
        damage: 2,
      },
    ],
  },
  effects: {
    onDeath: [
      {
        type: EffectTypes.Energy,
        text: [{ text: 'Gain 2 energy', style: RichTextStyle.info }],
        side: Sides.Allies,
        amount: 2,
        sign: Signs.add,
      },
    ],
  },
}

export default card
