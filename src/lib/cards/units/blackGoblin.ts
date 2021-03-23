import { CardDefinition } from 'lib/definitions'
import {
  AttackTypes,
  CardRarity,
  CardType,
  EffectTypes,
  Fractions,
  Guilds,
  ItemTypes,
  Sides,
} from 'lib/enums'
import descriptions from '../texts/units'
import { COUNT_ALL } from '../../effects'

const card: CardDefinition = {
  type: CardType.Unit,
  fraction: Fractions.Monsters,
  name: 'Black Goblin',
  slug: 'blackGoblin',
  cost: 5,
  rarity: CardRarity.Bronze,
  description: descriptions.blackGoblin,
  attributes: {
    guilds: [Guilds.Goblin],
    slots: {
      count: 1,
      canEquip: [ItemTypes.MeleeWeapon],
    },
    defence: 2,
    armor: 0,
    health: 3,
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
        type: EffectTypes.Boost,
        text: '[Boost|positive] all allied [goblins|highlight] by 1.',
        targets: {
          guilds: [Guilds.Goblin],
          side: Sides.Allies,
        },
        count: COUNT_ALL,
        value: 1,
      },
    ],
  },
}

export default card
