import {
  BaseTargets,
  Collections,
  Comparisons,
  Fractions,
  Guilds,
  ItemTypes,
} from './enums'

export interface ConditionHasDefinition {
  guild?: Guilds
  fraction?: Fractions
  itemType?: ItemTypes
  cardSlug?: string
  count?: number
  comparison: Comparisons
}
export interface ConditionDefinition {
  target: BaseTargets.Allies | BaseTargets.Enemies | BaseTargets.All
  collection: Collections
  have?: ConditionHasDefinition
  notHave?: ConditionHasDefinition
  text?: string
}
