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
  name: 'Molerat',
  slug: 'molerat',
  rarity: CardRarity.Bronze,
  cost: 3,
  fraction: Fractions.Monsters,
  description: descriptions.molerat,
  attributes: {
    guilds: [Guilds.Beast],
    defence: 1,
    health: 3,
    armor: 0,
    attacks: [
      {
        type: AttackTypes.Melee,
        text: 'Bite',
        cost: 1,
        damage: 1,
      },
    ],
  },
  effects: {
    onDeath: [
      {
        type: EffectTypes.Energy,
        text: [
          richText.getKeyword(Keywords.Gain, { fn: capitalize }),
          ' 1 energy.',
        ],
        side: Sides.Allies,
        amount: 1,
        sign: Signs.add,
      },
    ],
  },
}

export default card
