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
    text: '[Spawn|magic] two [scavengers|highlight]',
    side: Sides.Allies,
    spawn: scavenger,
    count: 2,
  },
}

export default card
