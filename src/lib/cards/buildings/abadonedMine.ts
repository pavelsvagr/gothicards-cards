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
import { RichTextStyle } from '../../formatting'

const card: CardDefinition = {
  type: CardType.Building,
  fraction: Fractions.Monsters,
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
        text: [
          { text: 'Select one:', style: RichTextStyle.info, line: true },
          {
            text: [
              { text: 'spawn', style: RichTextStyle.magic },
              { text: 'minecrawler', card: 'minecrawler' },
            ],
            line: true,
          },
          { text: 'or', line: true },
          {
            text: [
              { text: 'spawn', style: RichTextStyle.magic },
              { text: 'skeleton', card: 'skeleton' },
            ],
            line: true,
          },
        ],
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
