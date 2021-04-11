import * as units from './cards/units'
import * as buildings from './cards/buildings'
import * as effects from './cards/effects'
// import * as items from './cards/items' //todo add items
import { CardDefinition } from './definitions'

const allCards: CardDefinition[] = [
  ...Object.values(units),
  ...Object.values(buildings),
  ...Object.values(effects),
  // ...Object.values(items),
]

const cardsBySlug = new Map<string, CardDefinition>(
  allCards.map(card => [card.slug, card])
)

export const loadCardBySlug = (slug: string): CardDefinition => {
  const cardDef = cardsBySlug.get(slug)
  if (cardDef) {
    return cardDef
  }
  throw new Error('Invalid card slug.')
}
