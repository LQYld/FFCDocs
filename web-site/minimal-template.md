# Minimal template

<script setup>
import { fw_logo_map } from '../common/config';
import MdH2Component from '../components/MdH2Component.vue'
</script>

<MdH2Component :icon="fw_logo_map.vue" title="Vue2" id="vue2"/>
<Badge type="info" text="HelloWorld.vue" />
```vue
<template>
  <h1>Hello world</h1>
</template>
```

<MdH2Component :icon="fw_logo_map.vue" title="Vue3" id="vue3"/>
<Badge type="info" text="HelloWorld.vue" />
```vue
<template>
  <h1>Hello world</h1>
</template>
```

<MdH2Component :icon="fw_logo_map.react" title="React" id="react"/>
<Badge type="info" text="HelloWorld.vue" />
```jsx
export default function HelloWorld() {
  return <h1>Hello world</h1>;
}
```

<MdH2Component :icon="fw_logo_map.svelte" title="Svelte" id="svelte"/>
<Badge type="info" text="HelloWorld.svelte" />
```svelte
<h1>Hello world</h1>
```

<MdH2Component :icon="fw_logo_map.solidJS" title="SolidJS" id="solidJS"/>
<Badge type="info" text="HelloWorld.vue" />
```jsx
export default function HelloWorld() {
  return <h1>Hello World!</h1>;
}
```

<MdH2Component :icon="fw_logo_map.qwik" title="Qwik" id="qwik"/>
<Badge type="info" text="HelloWorld.tsx" />
```tsx
import { component$ } from "@builder.io/qwik";

export const HelloWorld = component$(() => {
    return <div>Hello World</div>;
});
```

<MdH2Component :icon="fw_logo_map.angular" title="Angular" id="angular"/>
<Badge type="info" text="helloworld.component.ts" />
```ts
import { Component } from "@angular/core";

@Component({
    selector: "app-helloworld",
    template: `<h1>Hello world</h1>`,
})
export class HelloworldComponent {}
```

<MdH2Component :icon="fw_logo_map.lit" title="Lit" id="lit"/>
<Badge type="info" text="hello-world.js" />
```js
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("hello-world")
export class HelloWorld extends LitElement {
  render() {
    return html`<h1>Hello world</h1>`;
  }
}
```

<MdH2Component :icon="fw_logo_map.ember" title="Ember" id="ember"/>
<Badge type="info" text="hello-world.vue" />
```hbs
<h1>Hello world</h1>
```

<MdH2Component :icon="fw_logo_map.alpine" title="Alpine" id="alpine"/>
<Badge type="info" text="index.html" />
```html
<h1>Hello world</h1>
```

<MdH2Component :icon="fw_logo_map.aurelia" title="Aurelia" id="aurelia"/>
<Badge type="info" text="hello-world.html" />
```html
<template>
  <h1>Hello world</h1>
</template>
```
