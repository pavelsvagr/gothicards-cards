import {
  BaseTargets,
  CardRarity,
  CardType,
  EffectTypes,
  Fractions,
} from '../../enums'
import descriptions from '../texts/effects'
import { CardDefinition } from '../../definitions'
import { Keywords, richText } from '../../richText'

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
    text: [richText.getKeyword(Keywords.Boost), ' one allied unit by 2'],
    value: 2,
    targets: BaseTargets.Allies,
    count: 1,
  },
}

export default card
