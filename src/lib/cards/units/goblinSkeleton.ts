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
import { RichTextStyle } from '../../formatting'

const card: CardDefinition = {
  type: CardType.Unit,
  name: 'Goblin Skeleton',
  slug: 'goblinSkeleton',
  rarity: CardRarity.Bronze,
  cost: 4,
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
        damage: 2,
      },
    ],
  },
  effects: {
    onPlay: [
      {
        type: EffectTypes.Boost,
        text: [{ text: 'Gain 4 health.', style: RichTextStyle.info }],
        targets: BaseTargets.Self,
        count: 1,
        value: 4,
      },
    ],
  },
}

export default card
