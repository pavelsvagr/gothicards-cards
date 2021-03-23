import { CardDefinition } from '../../definitions'
import {
  AttackTypes,
  BaseTargets,
  CardRarity,
  CardType,
  EffectTypes,
  Fractions,
  Guilds,
  ItemTypes,
} from '../../enums'
import descriptions from '../texts/units'

const card: CardDefinition = {
  type: CardType.Unit,
  name: 'Goblin Skeleton',
  slug: 'goblinSkeleton',
  rarity: CardRarity.Bronze,
  cost: 3,
  fraction: Fractions.Monsters,
  description: descriptions.goblinSkeleton,
  attributes: {
    guilds: [Guilds.Goblin, Guilds.Undead],
    slots: {
      count: 1,
      canEquip: [ItemTypes.MeleeWeapon],
    },
    defence: 1,
    health: 0,
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
        type: EffectTypes.Boost,
        text: '[Gain 4 health|positive]',
        targets: BaseTargets.Self,
        count: 1,
        value: 4,
      },
    ],
  },
}

export default card
