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
import { Keywords, richText } from '../../richText'
import { capitalize } from 'lodash'

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
        text: [
          richText.getKeyword(Keywords.Gain, { fn: capitalize }),
          ' 2 ',
          richText.getKeyword(Keywords.Energy),
          '.',
        ],
        side: Sides.Allies,
        amount: 2,
        sign: Signs.add,
      },
    ],
  },
}

export default card
