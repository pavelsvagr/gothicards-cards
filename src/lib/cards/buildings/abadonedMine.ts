import minecrawler from '../units/minecrawler'
import { CardDefinition } from '../../definitions'
import {
  CardRarity,
  CardType,
  DeathTypes,
  EffectTypes,
  Fractions,
  Sides,
} from '../../enums'
import descriptions from '../texts/buildings'
import { EFFECT_SELECTION } from '../../effects'

const card: CardDefinition = {
  type: CardType.Building,
  fraction: Fractions.Neutral,
  name: 'Abandoned Mine',
  slug: 'abadonedMine',
  cost: 7,
  rarity: CardRarity.Silver,
  description: descriptions.abadonedMine,
  attributes: {
    health: 2,
    armor: 1,
    deathType: DeathTypes.Ruin,
  },
  effects: {
    onPlay: [
      {
        type: EFFECT_SELECTION,
        text:
          '{[Select one:|energy]} ' +
          '{[spawn|magic] minecrawler} ' +
          '{[or|energy]} ' +
          '{[spawn|magic] skeleton}' +
          '{[or|energy]} ' +
          '{[spawn|magic] digger.} ',
        effects: [
          {
            type: EffectTypes.Spawn,
            spawn: minecrawler,
            side: Sides.Allies,
            count: 1,
          },
          // todo Add other card when ready
        ],
      },
    ],
  },
}

export default card
