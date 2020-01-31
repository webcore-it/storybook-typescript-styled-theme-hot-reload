# Storybook TypeScript with styled components

The hot reloading of storybook is not working when modifying a JSON theme file which is given to the styled components ThemeProvider in `.storybook/decorators.tsx`.

To reproduce:
1. Start storybook and go to http://localhost:6006 in your browser.
```bash
npm start
```
2. Change the `backgroundColor` in the file `themes/theme-first.json` from `blue` to `red` and save the file.

In the console there will be a note from webpack, which looks like it is aware of the modification, but the browser will still show a blue button, not a red one.

3. Reload the browser manually to see the change of the color.


