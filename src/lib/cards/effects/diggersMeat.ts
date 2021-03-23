import {
  BaseTargets,
  CardRarity,
  CardType,
  EffectTypes,
  Fractions,
} from '../../enums'
import descriptions from '../texts/effects'
import { CardDefinition } from '../../definitions'

const card: CardDefinition = {
  type: CardType.Effect,
  fraction: Fractions.Neutral,
  name: 'Diggers Meat',
  slug: 'diggersMeat',
  cost: 2,
  rarity: CardRarity.Bronze,
  description: descriptions.diggersMeat,
  effect: {
    type: EffectTypes.Boost,
    text: '[Boost|positive] one allied unit by 2',
    value: 2,
    targets: BaseTargets.Allies,
    count: 1,
  },
}

export default card
