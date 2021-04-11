import { CardDefinition } from '../../definitions'
import {
  AttackTypes,
  CardRarity,
  CardType,
  DamageTypes,
  EffectTypes,
  Fractions,
  Guilds,
  Sides,
} from '../../enums'
import descriptions from '../texts/units'
import { Keywords, richText } from '../../richText'
import { capitalize } from 'lodash'

const card: CardDefinition = {
  type: CardType.Unit,
  name: 'Swampgasdrone',
  slug: 'swampgasdrone',
  rarity: CardRarity.Silver,
  cost: 4,
  fraction: Fractions.Monsters,
  description: descriptions.swampgasdrone,
  attributes: {
    guilds: [Guilds.Insect],
    defence: 1,
    armor: 0,
    health: 3,
    damageType: DamageTypes.Poison,
    attacks: [
      {
        type: AttackTypes.Melee,
        text: 'Poison bite',
        cost: 1,
        damage: 2,
      },
    ],
  },
  effects: {
    onDeath: [
      {
        type: EffectTypes.Damage,
        text: [
          richText.getKeyword(Keywords.Spread, { fn: capitalize }),
          ' 3 damage among enemies',
        ],
        targets: {
          side: Sides.Enemies,
          cardType: CardType.Unit,
        },
        value: 1,
        count: 3,
        random: {
          repeat: true,
        },
      },
    ],
  },
}

export default card
