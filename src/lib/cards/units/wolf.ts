import { CardDefinition } from '../../definitions'
import {
  AttackTypes,
  BaseTargets,
  CardRarity,
  CardType,
  EffectTypes,
  Fractions,
  Guilds,
} from '../../enums'
import descriptions from '../texts/units'

const card: CardDefinition = {
  type: CardType.Unit,
  name: 'Wolf',
  slug: 'wolf',
  rarity: CardRarity.Bronze,
  cost: 4,
  fraction: Fractions.Monsters,
  description: descriptions.wolf,
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
        damage: 2,
      },
    ],
    abilities: [
      {
        cost: 1,
        effect: {
          type: EffectTypes.Eat,
          text:
            '[Damage|damage] allied [beast|highlight] by 1 and [boost|positive] self by 2',
          targets: BaseTargets.Allies,
          value: 2,
          count: 1,
          boost: 2,
        },
      },
    ],
  },
}

export default card
