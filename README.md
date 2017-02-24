# Bookshelf

Google is great for retrieving information. Bookshelf shows you what you already know.

## Theory

Well-read academics have a supernatural ability to recommend just the right specific text, page number, and paragraph for almost any situation in their field. This ability is honed by two co-current processes:

1. The reading of lots of text (akin to Google's 'spidering')
2. The retrieval of something from memory based on a sophisticated implicit search algorithm (which is improved after repeated exposure to the text and to the recommendation context) (akin to Google's 'search')

A well-read academic's bookshelf can therefore be likened to Google's indexed graph: it provides a physical representation of 'what is known', with semantic highlights for particualr pieces (spine fonts, colours, sizes, hefts).

**Bookshelf** recreates that entity for the web. It is easy to find just-in-time knowledge for any given situation if one has basic proficiency with Google. It is much harder to keep a semantically meaningful store of what has been read, in such a way as to make it easy to recommend. By representing read webpages as 'spines', each with a semantically meaningful colour, font, name, logo, and [hovered highlight quote :construction:], process 2. above becomes easier to replicate for digital texts.

## How does it work

This repo contains a [mockup](mockup/) :construction: of the frontend for retrieval and a [basic Chrome extension](extension/) :construction: for the addition of new texts.

In future, it will be possible to add a semantically meaningful quote to each Spine on hover, to make up for some of the semantic lack in transitioning between a physical and digital representation. This quote will be achieved by activating the extension and highlighting from a page.

## Tech involved

- Vanilla JS
- Foundation
- Node
- MongoDB
