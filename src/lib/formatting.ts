import { RichTextJson } from 'json-rt'

export enum TextType {
  Quote,
  RichText,
}

export interface Quote {
  type: TextType.Quote
  quote: string
  author: string
}

export interface RichText {
  type: TextType.RichText
  text: RichTextJson
}

export enum RichTextStyle {
  highlight = 'highlight',
  positive = 'positive',
  negative = 'negative',
  magic = 'magic',
  info = 'info',
}
