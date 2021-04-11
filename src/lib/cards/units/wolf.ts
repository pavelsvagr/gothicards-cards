import { CardDefinition } from '../../definitions'
import {
  AttackTypes,
  BaseTargets,
  CardRarity,
  CardType,
  EffectTypes,
  Fractions,
  Guilds,
} from '../../enums'
import descriptions from '../texts/units'
import { Keywords, richText } from '../../richText'
import { capitalize } from 'lodash'

const card: CardDefinition = {
  type: CardType.Unit,
  name: 'Wolf',
  slug: 'wolf',
  rarity: CardRarity.Bronze,
  cost: 4,
  fraction: Fractions.Monsters,
  description: descriptions.wolf,
  attributes: {
    guilds: [Guilds.Beast],
    defence: 1,
    health: 4,
    armor: 0,
    attacks: [
      {
        type: AttackTypes.Melee,
        text: 'Bite',
        cost: 1,
        damage: 2,
      },
    ],
    abilities: [
      {
        cost: 1,
        effect: {
          type: EffectTypes.Eat,
          text: [
            richText.getKeyword(Keywords.Damage, { fn: capitalize }),
            ' allied unit by 1 and ',
            richText.getKeyword(Keywords.Boost, { fn: capitalize }),
            ' self by 2.',
          ],
          targets: BaseTargets.Allies,
          value: 2,
          count: 1,
          boost: 2,
        },
      },
    ],
  },
}

export default card
