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
import { RichTextStyle } from '../../formatting'

const card: CardDefinition = {
  type: CardType.Unit,
  fraction: Fractions.Monsters,
  name: 'Goblin Warrior',
  slug: 'goblinWarrior',
  cost: 5,
  rarity: CardRarity.Silver,
  description: descriptions.goblinWarrior,
  attributes: {
    guilds: [Guilds.Goblin],
    slots: {
      count: 2,
      canEquip: [ItemTypes.MeleeWeapon, ItemTypes.Armor],
    },
    defence: 1,
    armor: 0,
    health: 4,
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
        type: EffectTypes.Damage,
        text: [
          { text: 'Deal 1 damage', style: RichTextStyle.negative },
          ' to one enemy unit.',
        ],
        targets: {
          cardType: CardType.Unit,
          side: Sides.Enemies,
        },
        count: 1,
        value: 1,
      },
    ],
  },
}

export default card
