# eslint-config-vue
A reusable ESLint config for my Vue projects

## Usage
Installation:

```bash
npm i -D @thomaslorincz/eslint-config-vue
```

Configuration (ESLint v8):

```cjs
modules.exports = {
    extends: ['@thomaslorincz/eslint-config-vue']
};
```

## Notes
This project was created to help keep a consistent style across my various Vue projects. More rules will be added as I discover (and like) them.

Right now I am using the legacy v8 ESLint config, but I plan to update to the flat v9 config in the future when all Vue plugins support it (e.g. @vue/eslint-config-typescript).
