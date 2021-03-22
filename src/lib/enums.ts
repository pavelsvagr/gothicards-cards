export enum CardType {
  Unit = 'unit',
  Building = 'building',
  Item = 'item',
  Effect = 'effect',
}

export enum CardRarity {
  Bronze = 'bronze',
  Silver = 'silver',
  Gold = 'gold',
  Ore = 'ore',
}

export enum Fractions {
  Neutral = 'neutral',
  Monsters = 'monsters',
  OldCamp = 'old camp',
}

export enum DamageTypes {
  Strike = 'strike',
  Rocks = 'rocks',
  Fire = 'fire',
}

export enum DeathTypes {
  Blood = 'blood',
  Ruin = 'ruin',
}

export enum Guilds {
  Human = 'human',
  Undead = 'undead',
  Skeleton = 'skeleton',
  Beast = 'beast',
  Goblin = 'goblin',
  Insect = 'insect',
}

export enum ItemTypes {
  MeleeWeapon = 'melee weapon',
  RangeWeapon = 'range weapon',
  Armor = 'armor',
}

export enum StatusTypes {
  Immunity = 'immunity',
}

export enum AttackTypes {
  Melee = 'melee',
  Range = 'range',
}

export enum EffectTypes {
  Damage = 'damage',
  Boost = 'boost',
  Heal = 'heal',
  Strengthen = 'strengthen',
  Resurrect = 'resurrect',
  Energy = 'energy',
  Spawn = 'spawn',
  Transform = 'transform',
  Reset = 'reset',
}

export enum BaseTargets {
  All = 'all',
  Enemies = 'enemies',
  Allies = 'allies',
  Self = 'self',
}

export enum Sides {
  Allies = 'allies',
  Enemies = 'enemies',
  All = 'all',
}

export enum Collections {
  Hand = 'hand',
  Deck = 'deck',
  Battlefield = 'battlefield',
  Graveyard = 'graveyard',
}

export enum Signs {
  add = 'add',
  remove = 'remove',
}

export enum Comparisons {
  exact = 'exact',
  atLeast = 'at least',
}
