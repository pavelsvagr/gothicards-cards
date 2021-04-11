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
import { CardDefinition } from '../../definitions'
import { Keywords, richText } from '../../richText'

const card: CardDefinition = {
  type: CardType.Unit,
  fraction: Fractions.Monsters,
  cost: 5,
  name: 'Fieldraider',
  slug: 'fieldraider',
  rarity: CardRarity.Bronze,
  description: descriptions.fieldraider,
  attributes: {
    guilds: [Guilds.Insect],
    defence: 2,
    health: 3,
    armor: 0,
    attacks: [
      {
        type: AttackTypes.Melee,
        text: 'Slash',
        cost: 2,
        damage: 2,
      },
    ],
  },
  effects: {
    onPlay: [
      {
        type: EffectTypes.Energy,
        text: [
          'You ',
          richText.getKeyword(Keywords.Gain),
          ' 1 ',
          richText.getKeyword(Keywords.Energy),
          '.',
        ],
        side: Sides.Allies,
        sign: Signs.add,
        amount: 1,
      },
    ],
    onTurnEnd: [
      {
        type: EffectTypes.Energy,
        text: [
          'Enemy ',
          richText.getKeyword(Keywords.Loses),
          ' 1 ',
          richText.getKeyword(Keywords.Energy),
          '.',
        ],
        side: Sides.Enemies,
        sign: Signs.remove,
        amount: 1,
      },
    ],
  },
}

export default card
