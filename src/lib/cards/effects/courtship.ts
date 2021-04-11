import scavenger from '../units/scavenger'
import { CardDefinition } from '../../definitions'
import {
  CardRarity,
  CardType,
  EffectTypes,
  Fractions,
  Sides,
} from '../../enums'
import descriptions from '../texts/effects'
import { Keywords, richText } from '../../richText'
import { capitalize } from 'lodash'

const card: CardDefinition = {
  type: CardType.Effect,
  fraction: Fractions.Monsters,
  name: 'Courtship',
  slug: 'courtship',
  cost: 8,
  rarity: CardRarity.Silver,
  description: descriptions.courtship,
  effect: {
    type: EffectTypes.Spawn,
    text: [
      richText.getKeyword(Keywords.Spawn, { fn: capitalize }),
      ' two ',
      { text: 'scavengers', cardRef: 'scavenger' },
    ],
    side: Sides.Allies,
    spawn: scavenger,
    count: 2,
  },
}

export default card
