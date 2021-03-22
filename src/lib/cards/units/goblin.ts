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

const goblin: CardDefinition = {
  type: CardType.Unit,
  name: 'Goblin',
  slug: 'goblin',
  rarity: CardRarity.Bronze,
  cost: 3,
  fraction: Fractions.Monsters,
  description:
    'Small green humanoids that like stealing. They are living in big groups, so if you meet one of them, be prepared for the whole family.',
  attributes: {
    guilds: [Guilds.Goblin],
    slots: {
      count: 1,
      canEquip: [ItemTypes.MeleeWeapon],
    },
    defence: 1,
    health: 2,
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
        type: EffectTypes.Damage,
        text: '[Deal 1 damage|damage] to one enemy unit.',
        targets: BaseTargets.Enemies,
        count: 1,
        value: 1,
      },
    ],
  },
}

export default goblin
