export enum TextType {
  Quote,
}

export interface Quote {
  type: TextType.Quote
  quote: string
  author: string
}

export enum RichTextStyle {
  highlight = 'highlight',
  positive = 'positive',
  negative = 'negative',
  magic = 'magic',
  info = 'info',
}
