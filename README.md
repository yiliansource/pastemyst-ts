# PasteMyst-TS

An API wrapper for [paste.myst.rs](https://paste.myst.rs/), written in TypeScript.

All aspects of the v2 endpoint are currently implemented.

## Installation

You can install the library via npm:

```bash
npm install pastemyst-ts
```

## Usage

The endpoints are grouped inside the exports of the library. For example, information on a paste can be retrieved as such:

```ts
import * as pastemyst from "pastemyst-ts";

// optional; some endpoints require authorization through your personal
//   api token, retrieved through your profile settings.
pastemyst.authorize("myApiToken");

const myPaste = await pastemyst.pastes.getPaste("myPasteId");
```

You can find a list of endpoints over on PasteMyst's [API docs](https://paste.myst.rs/api-docs/). Each of these endpoints has an equivalent wrapper method in the library. Since the library is written in TypeScript with a fully-documented codebase, usage can easily be extrapolated from the documentation and IntelliSense.

## License

This project is available under a [MIT](./license.md) license.

## Acknowledgements

Thanks to [fmproductions](https://github.com/FleshMobProductions) for inspiring me to write this, and for providing valuable feedback on the project.
