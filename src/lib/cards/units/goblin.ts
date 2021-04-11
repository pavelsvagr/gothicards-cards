import { CardDefinition } from '../../definitions'
import {
  AttackTypes,
  CardRarity,
  CardType,
  EffectTypes,
  Fractions,
  Guilds,
  ItemTypes,
  Sides,
} from '../../enums'
import descriptions from '../texts/units'
import { Keywords, richText } from '../../richText'
import { capitalize } from 'lodash'

const card: CardDefinition = {
  type: CardType.Unit,
  name: 'Goblin',
  slug: 'goblin',
  rarity: CardRarity.Bronze,
  cost: 3,
  fraction: Fractions.Monsters,
  description: descriptions.goblin,
  attributes: {
    guilds: [Guilds.Goblin],
    slots: {
      count: 1,
      canEquip: [ItemTypes.MeleeWeapon],
    },
    defence: 1,
    health: 2,
    armor: 0,
    attacks: [
      {
        type: AttackTypes.Melee,
        text: 'Strike',
        cost: 1,
        damage: 1,
      },
    ],
  },
  effects: {
    onPlay: [
      {
        type: EffectTypes.Damage,
        text: [
          richText.getKeyword(Keywords.Deal, { fn: capitalize }),
          ' 1 damage to one enemy unit.',
        ],
        targets: {
          cardType: CardType.Unit,
          side: Sides.Enemies,
        },
        count: 1,
        value: 1,
      },
    ],
  },
}

export default card
