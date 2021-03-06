import { CardDefinition } from '../../definitions'
import {
  CardRarity,
  CardType,
  DeathTypes,
  EffectTypes,
  Fractions,
  Guilds,
  Sides,
  StatusTypes,
} from '../../enums'
import descriptions from '../texts/buildings'
import { Keywords, richText } from '../../richText'
import { capitalize } from 'lodash'

const card: CardDefinition = {
  type: CardType.Building,
  fraction: Fractions.Monsters,
  name: 'Old Cave',
  slug: 'oldCave',
  cost: 6,
  rarity: CardRarity.Silver,
  description: descriptions.oldCave,
  attributes: {
    health: 1,
    armor: 0,
    deathType: DeathTypes.Ruin,
    statuses: [
      {
        type: StatusTypes.Immunity,
        text: "Can't be attacked",
      },
    ],
  },
  effects: {
    onTurnEnd: [
      {
        type: EffectTypes.Boost,
        text: [
          'When you play ',
          richText.getGuild(Guilds.Goblin),
          richText.getKeyword(Keywords.Boost),
          ' it by 1 ',
        ],
        targets: {
          side: Sides.Allies,
          newCard: true,
          guilds: [Guilds.Goblin],
        },
        count: 1,
        value: 1,
      },
      {
        type: EffectTypes.Heal,
        text: [
          richText.getKeyword(Keywords.Heal, { fn: capitalize }),
          ' random allied ',
          richText.getGuild(Guilds.Beast),
          ' by 1',
        ],
        targets: {
          side: Sides.Allies,
          guilds: [Guilds.Beast],
        },
        random: {
          repeat: false,
        },
        count: 1,
        value: 1,
      },
    ],
  },
}

export default card
