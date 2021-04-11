import {
  CardRarity,
  CardType,
  DamageTypes,
  DeathTypes,
  Fractions,
  Guilds,
  ItemTypes,
} from './enums'
import { Quote, RichText } from './formatting'
import { Status } from './statuses'
import {
  AbilityDefinition,
  AttackDefinition,
  EffectDefinition,
} from './effects'

interface BaseCardDefinition {
  type: CardType
  slug: string
  name: string
  rarity: CardRarity
  cost: number
  description: string | Quote | RichText
  fraction: Fractions
}

interface Slots {
  count: 0 | 1 | 2 | 3
  canEquip: ItemTypes[]
}

export interface CardEffects {
  onPlay?: EffectDefinition[]
  onTurnEnd?: EffectDefinition[]
  onDeath?: EffectDefinition[]
}

/**
 * Properties for units
 * guilds: unit's classes for targeting and special effects.
 * slots: number of slots and items that can unit equip.
 * damageType: animation for attacks and effects.   (default: strike)
 * deathType: animation when unit dies.             (default: blood)
 * statuses: default statuses of unit.
 * health: defines base health value.
 * armor: defines ignored damage, when unit is attacked.
 * defence: defines how much will be damaged attacker on this unit (only melee).
 * attacks: set of units possible attacks.
 * abilities: set of units abilities.
 */
export interface UnitCardProps {
  guilds: Guilds[]
  slots?: Slots
  damageType?: DamageTypes
  deathType?: DeathTypes
  statuses?: Status[]
  health: number
  armor: number
  defence: number
  attacks?: AttackDefinition[]
  abilities?: AbilityDefinition[]
}

/**
 * Properties for buildings
 * damageType: animation for damage effects.   (default: rocks)
 * deathType: animation when unit dies.        (default: ruin)
 * statuses: default statuses of building.
 * health: defines base health value.
 * armor: defines ignored damage, when building is attacked.
 */
export interface BuildingCardProps {
  damageType?: DamageTypes
  deathType?: DeathTypes
  statuses?: Status[]
  health: number
  armor: number
}

/**
 * Properties for weapons
 * type: type of weapon
 * damage: how many damage will be added to melee / range attacks
 * defence: defence bonus for unit, that owns this item
 */
export interface WeaponProps {
  type: ItemTypes.MeleeWeapon | ItemTypes.RangeWeapon
  damage: number
  defence?: number
}

/**
 * Properties for armors
 * armor: how many armor will be added to units props
 * defence: defence bonus for unit, that owns this item
 * health: base health bonus for unit, that owns this item
 */
export interface ArmorProps {
  type: ItemTypes.Armor
  armor: number
  health?: number
  defence?: number
}

type ItemCardProps = ArmorProps | WeaponProps

/**
 * Defines units, that stands on battlefield, attacks and can receive items.
 */
interface UnitCardDefinition extends BaseCardDefinition {
  type: CardType.Unit
  attributes: UnitCardProps
  effects?: CardEffects
}

/**
 * Defines buildings, that stands on battlefield, can't attack enemies but have
 * static abilities.
 */
interface BuildingCardDefinition extends BaseCardDefinition {
  type: CardType.Building
  attributes: BuildingCardProps
  effects?: CardEffects
}

/**
 * Defines items, that can be equipped by units.
 */
interface ItemCardDefinition extends BaseCardDefinition {
  type: CardType.Item
  attributes: ItemCardProps
}

/**
 * Defines effect, that is played only once.
 */
interface EffectCardDefinition extends BaseCardDefinition {
  type: CardType.Effect
  effect: EffectDefinition
}

export type CardDefinition =
  | UnitCardDefinition
  | BuildingCardDefinition
  | ItemCardDefinition
  | EffectCardDefinition
