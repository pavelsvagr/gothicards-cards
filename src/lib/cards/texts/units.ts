import { Quote, TextType } from '../../formatting'

const descriptions: { [slug: string]: Quote | string } = {
  // B
  blackGoblin: 'Black goblins are stronger and faster individuals. Groups with one or more black goblins are stronger and organized. Lots of hunters and bandits died by their hand.',
  bloodfly: {
    type: TextType.Quote,
    quote: "Even an experienced hunter can't hit these little bitches with a bow. I suggest having sword prepared or you will serve as a nest for their eggs. ",
    author: 'random hunter',
  },
  // F
  fieldraider: {
    type: TextType.Quote,
    quote: 'Lately the farmers have had more and more problems with field raiders. A few of them even managed to get themselves eaten.',
    author: 'Fester',
  },
  // G
  goblin: 'Small green humanoids that like stealing. They are living in big groups, so if you meet one of them, be prepared for the whole family.',
  goblinBandit: {
    type: TextType.Quote,
    quote: "Someone told me, that goblins are weak. You just need to be quick and don't let them go around you. But one day a met a little one with daggers and cape. I lost three of my fingers and my best friend.",
    author: 'unknown hunter',
  },
  goblinSkeleton: 'Necromants practice resurrection of people on goblins. It is easier and small quick companion is  in fight always useful.',
  goblinWarrior: {
    type: TextType.Quote,
    quote: 'I swear! I saw a fucking goblin in armor holding an axe! That thing killed my escort!',
    author: 'Valentino',
  },
  // H
  harpy: 'Half-woman and half-bird creature they said... they forgot to mention how ugly the first half is!',
  // M
  minecrawler: {
    type: TextType.Quote,
    quote: "Beware of the minecrawlers. The further you get down, the closer you get to the beasts. Those rotten creatures come directly from Beliar's realm!",
    author: 'Glen',
  },
  molerat: '', // todo Molerat description.
  // S
  scavenger: 'Big chicken that can be quite dangerous.',
  snapper: "Snapper, a fine meat... you are if you don't run fast enough.",
  swampgasdrone: 'And you thought Bloodflies were annoying. Better cover your mouth.',
  swampGolem: {
    type: TextType.Quote,
    quote: 'Did that bush just move?',
    author: 'Famous last words in swamp.',
  },
  // W
  wolf: 'Wolfs are predators of the woods. Big hungry wolf can bite even if he has arrow in his neck.',
}

export default descriptions
