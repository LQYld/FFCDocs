# Loop

<script setup>
import { fw_logo_map } from '../common/config';
import MdH2Component from '../components/MdH2Component.vue'
</script>

<MdH2Component :icon="fw_logo_map.vue" title="Vue2" id="vue2"/>
<Badge type="info" text="Colors.vue" />
```
<script>
export default {
  data() {
    return {
      colors: ["red", "green", "blue"],
    };
  },
};
</script>

<template>
  <ul>
    <li
      v-for="color in colors"
      :key="color"
    >
      {{ color }}
    </li>
  </ul>
</template>
```

<MdH2Component :icon="fw_logo_map.vue" title="Vue3" id="vue3"/>
<Badge type="info" text="Colors.vue" />
```vue
<script setup>
const colors = ["red", "green", "blue"];
</script>

<template>
  <ul>
    <li
      v-for="color in colors"
      :key="color"
    >
      {{ color }}
    </li>
  </ul>
</template>
```

<MdH2Component :icon="fw_logo_map.react" title="React" id="react"/>
<Badge type="info" text="Colors.jsx" />
```jsx
export default function Colors() {
  const colors = ["red", "green", "blue"];
  return (
    <ul>
      {colors.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  );
}
```

<MdH2Component :icon="fw_logo_map.svelte" title="Svelte" id="svelte"/>
<Badge type="info" text="Colors.svelte" />
```svelte
<script>
  const colors = ["red", "green", "blue"];
</script>

<ul>
  {#each colors as color (color)}
    <li>{color}</li>
  {/each}
</ul>
```

<MdH2Component :icon="fw_logo_map.solidJS" title="SolidJS" id="solidJS"/>
<Badge type="info" text="Colors.jsx" />
```js
import { For } from "solid-js";

export default function Colors() {
    const colors = ["red", "green", "blue"];

    return (
        <ul>
        <For each={colors}>{(color) => <li>{color}</li>}</For>
        </ul>
    );
}
```

<MdH2Component :icon="fw_logo_map.qwik" title="Qwik" id="qwik"/>
<Badge type="info" text="Colors.tsx" />
```tsx
import { component$ } from "@builder.io/qwik";

export const Colors = component$(() => {
  const colors = ["red", "green", "blue"];
  return (
    <>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </>
  );
});
```

<MdH2Component :icon="fw_logo_map.angular" title="Angular" id="angular"/>
<Badge type="info" text="colors.component.ts" />
```ts
import { Component } from "@angular/core";

@Component({
    selector: "app-colors",
    template: `
        <ul>
            <li *ngFor="let color of colors">{{ color }}</li>
        </ul>
    `,
})
export class ColorsComponent {
    colors = ["red", "green", "blue"];
}
```

<MdH2Component :icon="fw_logo_map.lit" title="Lit" id="lit"/>
<Badge type="info" text="colors-list.js" />
```js
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("colors-list")
export class ColorsList extends LitElement {
  colors = ["red", "green", "blue"];

  render() {
    return html`
      <ul>
        ${this.colors.map((color) => html`<li>${color}</li>`)}
      </ul>
    `;
  }
}
```

<MdH2Component :icon="fw_logo_map.ember" title="Ember" id="ember"/>
<Badge type="info" text="colors.hbs" />
```hbs
<ul>
  {{#each (array "red" "green" "blue") as |color|}}
    <li>{{color}}</li>
  {{/each}}
</ul>
```

<MdH2Component :icon="fw_logo_map.alpine" title="Alpine" id="alpine"/>
<Badge type="info" text="index.html" />
```html
<ul x-data="{ colors: ['red', 'green', 'blue'] }">
  <template x-for="color in colors">
    <li x-text="color"></li>
  </template>
</ul>
```

<MdH2Component :icon="fw_logo_map.aurelia" title="Aurelia" id="aurelia"/>
<Badge type="info" text="colors.html" />
```html
<template>
  <ul>
    <li repeat.for="color of colors">${color}</li>
  </ul>
</template>
```
<Badge type="info" text="colors.ts" />
```ts
export class Colors {
  colors = ["red", "green", "blue"];
}
```