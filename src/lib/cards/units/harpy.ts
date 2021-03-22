import { AttackTypes, CardRarity, CardType, Fractions, Guilds, StatusTypes } from 'lib/enums'
import { CardDefinition } from '../../definitions'

const harpy: CardDefinition = {
    type: CardType.Unit,
    name: 'Harpy',
    slug: 'harpy',
    rarity: CardRarity.Silver,
    cost: 5,
    fraction: Fractions.Monsters,
    description:
        'Half-woman and half-bird creature they said... they forgot to mention how ugly the first half is!',
    attributes: {
        guilds: [Guilds.Beast],
        defence: 1,
        health: 4,
        armor: 0,
        statuses: [
            {
                type: StatusTypes.Immunity,
                to: AttackTypes.Melee,
                text: 'Melee attacks immunity',
            },
        ],
        attacks: [
            {
                type: AttackTypes.Melee,
                text: 'Scratch',
                cost: 2,
                damage: 2,
            },
        ],
    },
}

export default harpy
