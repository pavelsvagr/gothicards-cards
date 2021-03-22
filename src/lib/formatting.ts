enum TextType {
  Quote,
}

export interface Quote {
  type: TextType.Quote
  quote: string
  author: string
}
