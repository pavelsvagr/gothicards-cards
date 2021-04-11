import { CardDefinition } from '../../definitions'
import {
  AttackTypes,
  CardRarity,
  CardType,
  Collections,
  Comparisons,
  EffectTypes,
  Fractions,
  Guilds,
  ItemTypes,
  Sides,
} from '../../enums'
import descriptions from '../texts/units'
import goblin from './goblin'
import { Keywords, richText } from '../../richText'
import { capitalize } from 'lodash'

const card: CardDefinition = {
  type: CardType.Unit,
  name: 'Goblin Bandit',
  slug: 'goblinBandit',
  rarity: CardRarity.Gold,
  cost: 6,
  fraction: Fractions.Monsters,
  description: descriptions.goblin,
  attributes: {
    guilds: [Guilds.Goblin],
    slots: {
      count: 1,
      canEquip: [ItemTypes.MeleeWeapon],
    },
    defence: 2,
    health: 2,
    armor: 1,
    attacks: [
      {
        type: AttackTypes.Melee,
        text: 'Side strike',
        cost: 1,
        damage: 2,
      },
      {
        type: AttackTypes.Melee,
        text: 'Double strike',
        cost: 2,
        damage: 3,
      },
    ],
  },
  effects: {
    onPlay: [
      {
        type: EffectTypes.Spawn,
        spawn: goblin,
        text: [
          richText.getKeyword(Keywords.If, { fn: capitalize }),
          ' you control one or more ',
          richText.getGuild(Guilds.Goblin),
          ' units ',
          richText.getKeyword(Keywords.Spawn),
          { text: 'goblin', cardRef: 'goblin' },
        ],
        side: Sides.Allies,
        count: 1,
        condition: {
          have: {
            comparison: Comparisons.atLeast,
            count: 2,
            side: Sides.Allies,
            collection: Collections.Battlefield,
          },
        },
      },
    ],
  },
}

export default card
