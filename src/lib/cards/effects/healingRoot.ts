import {
  BaseTargets,
  CardRarity,
  CardType,
  EffectTypes,
  Fractions,
} from '../../enums'
import { EFFECT_COMBINATION } from '../../effects'
import { CardDefinition } from '../../definitions'
import descriptions from '../texts/effects'

const card: CardDefinition = {
  type: CardType.Effect,
  fraction: Fractions.Neutral,
  name: 'Healing Root',
  slug: 'healingRoot',
  cost: 3,
  rarity: CardRarity.Bronze,
  description: descriptions.healingRoot,
  effect: {
    type: EFFECT_COMBINATION,
    text: '[Heal|positive] one allied unit by 3 nad [boost|positive] it by 1.',
    targets: BaseTargets.Allies,
    count: 1,
    effects: [
      {
        type: EffectTypes.Heal,
        value: 3,
      },
      {
        type: EffectTypes.Boost,
        value: 1,
      },
    ],
  },
}

export default card
