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
import { CardDefinition } from '../../definitions'

const card: CardDefinition = {
  type: CardType.Unit,
  fraction: Fractions.Monsters,
  cost: 4,
  name: 'Bloodfly',
  slug: 'bloodfly',
  rarity: CardRarity.Bronze,
  description: descriptions.bloodfly,
  attributes: {
    guilds: [Guilds.Insect],
    defence: 1,
    health: 2,
    armor: 0,
    attacks: [
      {
        type: AttackTypes.Melee,
        text: 'Sting',
        cost: 1,
        damage: 1,
      },
    ],
  },
  effects: {
    onTurnEnd: [
      {
        type: EffectTypes.Damage,
        text: '[Deal 1 damage|damage] to one random enemy unit.',
        targets: BaseTargets.Enemies,
        count: 1,
        value: 1,
        random: {
          repeat: false,
        },
      },
    ],
  },
}

export default card
