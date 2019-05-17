# ext-web-components-gen
A code generator for Ext-Web-Components applications.

## Installation

Install [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g @sencha/ext-web-components-gen
```

## Creating a new ext-web-components-gen App

If you haven't already, log into Sencha's private registry using the credentials you received in your Ext Components trial or subscription activation email. If you don't have credentials, you can get them by [signing up for a trial of Ext Web Components Early Access](https://www.sencha.com/products/extwebcomponents/evaluate/earlyaccess/).

```bash
npm login --registry=http://npm.sencha.com --scope=@sencha
```

Then, to create a new ext-web-components-gen app, run:

```bash
ext-web-components-gen app MyCoolWebExtWebComponentsApp
```

## Development

To make changes to the generator, run:

```bash
git clone git@github.com:sencha/ext-web-components.git
cd ext-web-components
npm install
cd packages/ext-web-components-gen
npm link
```

Now `ext-web-components-gen` will use your local copy of the generator.

## License

MIT © [Sencha, Inc.](https://www.sencha.com/)
