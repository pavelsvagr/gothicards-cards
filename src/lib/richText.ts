import { TextBlock } from 'json-rt'
import { RichTextStyle } from './formatting'

export enum Keywords {
  Spawn = 'spawn',
  Heal = 'heal',
  Boost = 'boost',
  Deal = 'deal',
  Damage = 'damage',
  Spread = 'spread',
  Loses = 'loses',
  Lose = 'lose',
  Gain = 'gain',
  Gains = 'gains',
  Energy = 'energy',
  If = 'if',
  When = 'when',
}

interface TextOptions {
  fn?: (text: string) => string
}

const richTextKeywords: { [key in Keywords]: TextBlock & { text: string } } = {
  [Keywords.Spawn]: {
    text: Keywords.Spawn,
    style: RichTextStyle.magic,
    help: 'Creates card on specified side of the battlefield.',
  },
  [Keywords.Boost]: {
    text: Keywords.Boost,
    style: RichTextStyle.positive,
    help: 'Increase health of unit or building about specified amount.',
  },
  [Keywords.Heal]: {
    text: Keywords.Heal,
    style: RichTextStyle.positive,
    help:
      'Increase health of unit or building about specified amount but health cannot be bigger than base health of the card.',
  },
  [Keywords.Deal]: {
    text: Keywords.Deal,
    style: RichTextStyle.negative,
    help: 'Decrease health of unit or building about specified amount.',
  },
  [Keywords.Damage]: {
    text: Keywords.Damage,
    style: RichTextStyle.negative,
    help: 'Decrease health of unit or building about specified amount.',
  },
  [Keywords.Spread]: {
    text: Keywords.Spread,
    style: RichTextStyle.negative,
    help:
      'Decrease health of random unit or building about specified amount. (One unit can be randomly chosen more times)',
  },
  [Keywords.Energy]: {
    text: Keywords.Energy,
    style: RichTextStyle.info,
    help:
      'Energy is requirement for attacks and abilities of cards on battlefield.',
  },
  [Keywords.Lose]: { text: Keywords.Lose, style: RichTextStyle.negative },
  [Keywords.Loses]: { text: Keywords.Loses, style: RichTextStyle.negative },
  [Keywords.Gain]: { text: Keywords.Gain, style: RichTextStyle.positive },
  [Keywords.Gains]: { text: Keywords.Gains, style: RichTextStyle.positive },
  [Keywords.If]: { text: Keywords.If, style: RichTextStyle.info },
  [Keywords.When]: { text: Keywords.When, style: RichTextStyle.info },
}

export const richText = {
  getKeyword: (keyword: Keywords, options: TextOptions = {}) => {
    const { fn } = options

    const richText = { ...richTextKeywords[keyword] }
    if (fn) {
      richText.text = fn(richText.text)
    }
    return richText
  },

  getGuild: (guild: string): TextBlock => ({
    text: guild,
    style: RichTextStyle.highlight,
  }),
}
