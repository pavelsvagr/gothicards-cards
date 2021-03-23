import * as units from "./cards/units"
import { CardDefinition } from "./definitions"

const allCards = [ ...Object.values(units) ]

const cardsBySlug = new Map<string, CardDefinition>(allCards.map(card => [card.slug, card]))

/**
 * Loades card by given slug
 */
export const loadCardBySlug = (slug: string): CardDefinition => {
    const cardDef = cardsBySlug.get(slug)
    if (cardDef) {
        return cardDef
    }
    throw new Error("Invalid card slug.")
}