import {
  AttackTypes,
  CardType,
  Collections,
  EffectTypes,
  Fractions,
  Guilds,
  ItemTypes,
  Sides,
  Signs,
  BaseTargets,
} from './enums'
import { CardDefinition } from './definitions'
import { ConditionDefinition } from './conditions'

export const EFFECT_COMBINATION = 'combination'
export const EFFECT_SELECTION = 'selection'
export const COUNT_ALL = 'all'

type Count = number | typeof COUNT_ALL

/**
 * Attacks are used during each round and cost player energy.
 * Attacked can be buildings or units.
 */
export interface AttackDefinition {
  type: AttackTypes
  cost: number
  damage: number
  text?: string
}

/**
 * Abilities are used during each round and cost player energy.
 */
export interface AbilityDefinition {
  cost: number
  effect: EffectDefinition
  text?: string
}

/**
 * Each field filled in target definition is condition that targeted
 * card must satisfy. If more fields (guilds, fractions) are specified,
 * OR rule is used.
 */
export interface TargetDefinition {
  guilds?: Guilds[]
  fractions?: Fractions[]
  canEquip?: ItemTypes[]
  collection?: Collections
  cardType?: CardType
  cardSlug?: string
  side: Sides
}

/**
 * Defines value based on cards.
 * Example: "Boost a unit by number of allied cards with guild 'human' by 2"
 * each will contain target for human cards between allies and amount will be 2.
 */
export interface ValueDefinition {
  each: TargetDefinition
  amount: number
  max?: number
}

/**
 * Defines if targeting is random. If random is set, targeting is skipped and
 * effect is choosing targets randomly. If repeat is true, same cards can
 * be targeted by RNG twice.
 */
export interface RandomDefinition {
  repeat: boolean
}

interface BaseEffect {
  type: EffectTypes | typeof EFFECT_COMBINATION | typeof EFFECT_SELECTION
  condition?: ConditionDefinition
  text?: string
}

interface TargetEffect extends BaseEffect {
  targets: BaseTargets | TargetDefinition
  count: Count
  random?: RandomDefinition
}

interface TargetValueEffect extends TargetEffect {
  value: number | ValueDefinition
}

/**
 * Adds value to unit's or building's actual health.
 */
interface BoostEffectDefinition extends TargetValueEffect {
  type: EffectTypes.Boost
}

/**
 * Removes value from unit's or building's actual health.
 */
interface DamageEffectDefinition extends TargetValueEffect {
  type: EffectTypes.Damage
}

/**
 * Removes value from unit's or building's actual health and boost self.
 */
interface EatEffectDefinition extends TargetValueEffect {
  type: EffectTypes.Eat
  boost: number
}

/**
 * Adds value to unit's or building's actual health but final value
 * can't exceed base health.
 */
interface HealEffectDefinition extends TargetValueEffect {
  type: EffectTypes.Heal
}

/**
 * Adds value to unit's or building's base and actual health.
 */
interface StrengthenEffectDefinition extends TargetValueEffect {
  type: EffectTypes.Strengthen
}

/**
 * Reset health of the unit to its base value.
 */
interface ResetEffectDefinition extends TargetEffect {
  type: EffectTypes.Reset
}

/**
 * Transforms unit or building to other card.
 */
interface TransformEffectDefinition extends TargetEffect {
  type: EffectTypes.Transform
  transformTo: CardDefinition
}

/**
 * Spawn unit or building on specified side.
 */
interface SpawnEffectDefinition extends BaseEffect {
  type: EffectTypes.Spawn
  side: Sides
  spawn: CardDefinition
  count: number
}

/**
 * Moves unit from graveyard and play it.
 */
interface ResurrectEffectDefinition extends TargetEffect {
  type: EffectTypes.Resurrect
}

/**
 * Adds or removes energy from one side.
 */
interface EnergyEffectDefinition extends BaseEffect {
  type: EffectTypes.Energy
  sign: Signs
  amount: number
  side: Sides
}

type RawEffect =
  | BoostEffectDefinition
  | DamageEffectDefinition
  | HealEffectDefinition
  | SpawnEffectDefinition
  | StrengthenEffectDefinition
  | EnergyEffectDefinition
  | ResetEffectDefinition
  | ResurrectEffectDefinition
  | TransformEffectDefinition
  | EatEffectDefinition

type CombinationEffect =
  | Omit<BoostEffectDefinition, 'targets' | 'count'>
  | Omit<DamageEffectDefinition, 'targets' | 'count'>
  | Omit<HealEffectDefinition, 'targets' | 'count'>
  | Omit<StrengthenEffectDefinition, 'targets' | 'count'>
  | Omit<ResetEffectDefinition, 'targets' | 'count'>
  | Omit<TransformEffectDefinition, 'targets' | 'count'>

/**
 * Applies all target effects at once.
 */
interface EffectCombination extends TargetEffect {
  type: typeof EFFECT_COMBINATION
  effects: CombinationEffect[]
}

/**
 * Gives player choice to select one effect.
 */
interface EffectSelection extends BaseEffect {
  type: typeof EFFECT_SELECTION
  effects: RawEffect[]
}

export type EffectDefinition = RawEffect | EffectCombination | EffectSelection
