import { CardDefinition } from '../../definitions'
import {
  AttackTypes,
  BaseTargets,
  CardRarity,
  CardType,
  EffectTypes,
  Fractions,
  Guilds,
  Sides,
} from '../../enums'
import descriptions from '../texts/units'

const card: CardDefinition = {
  type: CardType.Unit,
  name: 'Snapper',
  slug: 'snapper',
  rarity: CardRarity.Bronze,
  cost: 6,
  fraction: Fractions.Monsters,
  description: descriptions.snapper,
  attributes: {
    guilds: [Guilds.Beast],
    defence: 2,
    health: 2,
    armor: 0,
    attacks: [
      {
        type: AttackTypes.Melee,
        text: 'Bite',
        cost: 2,
        damage: 3,
      },
    ],
  },
  effects: {
    onPlay: [
      {
        type: EffectTypes.Boost,
        text:
          '[Boost|positive] self by number of allied [beasts|highlight] [(max by 5|energy)].',
        targets: BaseTargets.Self,
        value: {
          each: {
            side: Sides.Allies,
            guilds: [Guilds.Beast],
          },
          amount: 1,
          max: 5,
        },
        count: 1,
      },
    ],
  },
}

export default card
