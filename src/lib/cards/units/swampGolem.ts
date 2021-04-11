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
import { RichTextStyle } from '../../formatting'
import { Keywords, richText } from '../../richText'
import { capitalize } from 'lodash'

const card: CardDefinition = {
  type: CardType.Unit,
  name: 'Swamp Golem',
  slug: 'swampGolem',
  rarity: CardRarity.Gold,
  cost: 9,
  fraction: Fractions.Monsters,
  description: descriptions.swampGolem,
  attributes: {
    guilds: [Guilds.Insect],
    defence: 3,
    health: 6,
    armor: 0,
    attacks: [
      {
        type: AttackTypes.Melee,
        text: 'Punch',
        cost: 2,
        damage: 4,
      },
    ],
  },
  effects: {
    onPlay: [
      {
        type: EffectTypes.Boost,
        text: [
          richText.getKeyword(Keywords.Boost, { fn: capitalize }),
          ' all allied ',
          richText.getGuild(Guilds.Insect),
          ' units by 1.',
        ],
        targets: {
          side: Sides.Enemies,
          guilds: [Guilds.Insect],
        },
        value: 1,
        count: COUNT_ALL,
      },
    ],
  },
}

export default card
