import {
  AttackTypes,
  CardRarity,
  CardType,
  Fractions,
  Guilds,
  StatusTypes,
} from 'lib/enums'
import { CardDefinition } from '../../definitions'
import descriptions from '../texts/units'

const card: CardDefinition = {
  type: CardType.Unit,
  name: 'Harpy',
  slug: 'harpy',
  rarity: CardRarity.Silver,
  cost: 5,
  fraction: Fractions.Monsters,
  description: descriptions.harpy,
  attributes: {
    guilds: [Guilds.Beast],
    defence: 1,
    health: 4,
    armor: 0,
    statuses: [
      {
        type: StatusTypes.Immunity,
        to: AttackTypes.Melee,
        text: 'Melee attacks immunity',
      },
    ],
    attacks: [
      {
        type: AttackTypes.Melee,
        text: 'Scratch',
        cost: 2,
        damage: 2,
      },
    ],
  },
}

export default card
