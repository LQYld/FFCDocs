# Styling

<script setup>
import { fw_logo_map } from '../common/config';
import MdH2Component from '../components/MdH2Component.vue'
</script>

<MdH2Component :icon="fw_logo_map.vue" title="Vue2" id="vue2"/>
<Badge type="info" text="CssStyle.vue" />
```vue
<template>
  <div>
    <h1 class="title">I am red</h1>
    <button style="font-size: 10rem">I am a button</button>
  </div>
</template>

<style scoped>
.title {
  color: red;
}
</style>
```

<MdH2Component :icon="fw_logo_map.vue" title="Vue3" id="vue3"/>
<Badge type="info" text="CssStyle.vue" />
```vue
<template>
  <h1 class="title">I am red</h1>
  <button style="font-size: 10rem">I am a button</button>
</template>

<style scoped>
.title {
  color: red;
}
</style>
```

<MdH2Component :icon="fw_logo_map.react" title="React" id="react"/>
<Badge type="info" text="CssStyle.jsx" />
```jsx
import "./style.css";

export default function CssStyle() {
    return (
        <>
            <h1 className="title">I am red</h1>
            <button style={{ fontSize: "10rem" }}>I am a button</button>
        </>
    );
}
```
<Badge type="info" text="style.css" />
```css
.title {
  color: red;
}
```

<MdH2Component :icon="fw_logo_map.svelte" title="Svelte" id="svelte"/>
<Badge type="info" text="CssStyle.svelte" />
```svelte
<h1 class="title">I am red</h1>
<button style="font-size: 10rem;">I am a button</button>

<style>
  .title {
    color: red;
  }
</style>
```

<MdH2Component :icon="fw_logo_map.solidJS" title="SolidJS" id="solidJS"/>
<Badge type="info" text="CssStyle.jsx" />
```jsx
import "./style.css";

export default function CssStyle() {
  return (
    <>
      <h1 class="title">I am red</h1>
      <button style={{ "font-size": "10rem" }}>I am a button</button>
    </>
  );
}
```
<Badge type="info" text="style.css" />
```css
.title {
  color: red;
}
```

<MdH2Component :icon="fw_logo_map.qwik" title="Qwik" id="qwik"/>
<Badge type="info" text="CssStyle.tsx" />
```tsx
import { component$, useStyles$ } from "@builder.io/qwik";

export const App = component$(() => {
    useStyles$(`
        .title {
            color: red;
        }
    `);

    return (
        <>
            <h1 class="title">I am red</h1>
            <button style={{ "font-size": "10rem" }}>I am a button</button>
        </>
    );
});
```

<MdH2Component :icon="fw_logo_map.angular" title="Angular" id="angular"/>
<Badge type="info" text="Name.vue" />
```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-cssstyle",
  template: `
    <h1 class="title">I am red</h1>
    <button style="font-size: 10rem">I am a button</button>
  `,
  styles: [
    `
      .title {
        color: red;
      }
    `,
  ],
})
export class CssStyleComponent {}
```

<MdH2Component :icon="fw_logo_map.lit" title="Lit" id="lit"/>
<Badge type="info" text="css-style.js" />
```js
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("css-style")
export class CssStyle extends LitElement {
    static styles = css`
        .title {
            color: red;
        }
    `;

    render() {
        return html`
            <h1 class="title">I am red</h1>
            <button style=${styleMap({ fontSize: "10rem" })}>I am a button</button>
        `;
    }
}
```

<MdH2Component :icon="fw_logo_map.ember" title="Ember" id="ember"/>
<Badge type="info" text="css-style.hbs" />
```hbs
<h1 class="title">I am red</h1>
<button style="font-size: 10rem;">I am a button</button>
```
<Badge type="info" text="css-style.css" />
```css
/* using: https://github.com/salsify/ember-css-modules */
.title {
  color: red;
}
```

<MdH2Component :icon="fw_logo_map.alpine" title="Alpine" id="alpine"/>
<Badge type="info" text="index.html" />
```html
<h1 class="title">I am red</h1>
<button style="font-size: 10rem">I am a button</button>

<style>
  .title {
    color: red;
  }
</style>
```

<MdH2Component :icon="fw_logo_map.aurelia" title="Aurelia" id="aurelia"/>
<Badge type="info" text="css-style.html" />
```html
<template>
  <require from="./styling.css"></require>

  <h1 class="title">I am red</h1>
  <button style="font-size: 10rem">I am a button</button>
</template>
```
<Badge type="info" text="css-style.css" />
```css
.title {
  color: red;
}
```