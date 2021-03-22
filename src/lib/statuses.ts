import { AttackTypes, StatusTypes } from './enums'

/**
 * Status giving unit or building immunity.
 * Card can't be TARGETED by effects and attacks.
 * If "to" is omitted, card is immune to all attacks.
 */
interface ImmunityStatus {
  type: StatusTypes.Immunity
  to?: AttackTypes
}

export type Status = ImmunityStatus
