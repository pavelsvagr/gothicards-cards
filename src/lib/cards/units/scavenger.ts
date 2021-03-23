import { CardDefinition } from '../../definitions'
import {
  AttackTypes,
  CardRarity,
  CardType,
  EffectTypes,
  Fractions,
  Guilds,
  Sides,
} from '../../enums'
import descriptions from '../texts/units'
import { COUNT_ALL } from '../../effects'

const card: CardDefinition = {
  type: CardType.Unit,
  name: 'Scavenger',
  slug: 'scavenger',
  rarity: CardRarity.Bronze,
  cost: 3,
  fraction: Fractions.Monsters,
  description: descriptions.scavenger,
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
    onPlay: [
      {
        type: EffectTypes.Boost,
        text: '[Boost|positive] all other scavengers by 2.',
        targets: {
          cardSlug: 'scavenger',
          side: Sides.Allies,
        },
        value: 2,
        count: COUNT_ALL,
      },
    ],
  },
}

export default card
