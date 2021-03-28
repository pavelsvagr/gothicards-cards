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
import { RichTextStyle } from '../../formatting'

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
    text: [
      { text: 'Heal one allied unit by 2', style: RichTextStyle.info },
      ' and ',
      { text: 'boost it by 1', style: RichTextStyle.info },
    ],
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
