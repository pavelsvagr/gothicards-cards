import {
  Collections,
  Comparisons,
  Fractions,
  Guilds,
  ItemTypes,
  Sides,
} from './enums'

export interface ConditionHasDefinition {
  side: Sides
  collection: Collections
  comparison: Comparisons
  guild?: Guilds
  fraction?: Fractions
  itemType?: ItemTypes
  cardSlug?: string
  count?: number
}
export interface ConditionDefinition {
  have?: ConditionHasDefinition
  notHave?: ConditionHasDefinition
  text?: string
}
