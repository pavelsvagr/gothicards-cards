<div align="center">

# Gothicards Card definitions
Card definitions and typings for card game inspired by RPG Gothic.

</div>

## ✏️ Definitions
All definitions are under [cards folder](./src/lib/cards). Possible attributes
and card properties are defined by Typescript interfaces.
See [definitions.ts](./src/lib/definitions.ts) for more info.

## 🎨 Text formatting
Cards use Json Rich Text for its descriptions. There are some custom keys:

- **style** `(string)` - predefined styling for text, possible values:
  - `info` - yellow, conditions, highlighted information.
  - `positive` - green, boost, heal etc.
  - `negative` - red, damage, eat etc.
  - `magic` - spawn, transform, magic ore...
  - `label` - simple highlight for keywords

- **card** `(string)` - contains card slug of the card, that is referenced.


## 💡 Help, typos and new ideas
Your recommendations for updates, fixes and LORE friendly cards are welcome.
Please, use classic git flow with pull requests and issues.



