# Computed state

<script setup>
import { fw_logo_map } from '../common/config';
import MdH2Component from '../components/MdH2Component.vue'
</script>

<MdH2Component :icon="fw_logo_map.vue" title="Vue2" id="vue2"/>
<Badge type="info" text="DoubleCount.vue" />
```vue
<script>
export default {
  data() {
    return {
      count: 10,
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
};
</script>

<template>
  <div>{{ doubleCount }}</div>
</template>

```


<MdH2Component :icon="fw_logo_map.vue" title="Vue3" id="vue3"/>
<Badge type="info" text="DoubleCount.vue" />
```vue
<script setup>
import { ref, computed } from "vue";
const count = ref(10);
const doubleCount = computed(() => count.value * 2);
</script>

<template>
  <div>{{ doubleCount }}</div>
</template>
```


<MdH2Component :icon="fw_logo_map.react" title="React" id="react"/>
<Badge type="info" text="DoubleCount.jsx" />
```jsx
import { useState } from "react";

export default function DoubleCount() {
    const [count] = useState(10);
    const doubleCount = count * 2;

    return <div>{doubleCount}</div>;
}
```


<MdH2Component :icon="fw_logo_map.svelte" title="Svelte" id="svelte"/>
<Badge type="info" text="DoubleCount.svelte" />
```svelte
<script>
  let count = 10;
  $: doubleCount = count * 2;
</script>

<div>{doubleCount}</div>
```


<MdH2Component :icon="fw_logo_map.solidJS" title="SolidJS" id="solidJS"/>
<Badge type="info" text="DoubleCount.jsx" />
```jsx
import { createSignal } from "solid-js";

export default function DoubleCount() {
    const [count] = createSignal(10);
    const doubleCount = () => count() * 2;

    return <div>{doubleCount()}</div>;
}

```


<MdH2Component :icon="fw_logo_map.qwik" title="Qwik" id="qwik"/>
<Badge type="info" text="DoubleCount.tsx" />
```tsx
import { component$, useStore } from "@builder.io/qwik";

export const DoubleCount = component$(() => {
  const store = useStore({ count: 10 });
  const doubleCount = store.count * 2;

  return <div>{doubleCount}</div>;
});

```


<MdH2Component :icon="fw_logo_map.angular" title="Angular" id="angular"/>
<Badge type="info" text="doubleCount.component.ts" />
```ts
import { Component } from "@angular/core";

@Component({
    selector: "app-doublecount",
    template: `<div>{{ doubleCount }}</div>`,
})
export class DoublecountComponent {
    count = 10;

    get doubleCount() {
        return this.count * 2;
    }
}
```


<MdH2Component :icon="fw_logo_map.lit" title="Lit" id="lit"/>
<Badge type="info" text="double-count.js" />
```js
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("double-count")
export class DoubleCount extends LitElement {
  @state()
  count = 10;

  render() {
    const doubleCount = this.count * 2;
    return html`<div>${doubleCount}</div>`;
  }
}

```


<MdH2Component :icon="fw_logo_map.ember" title="Ember" id="ember"/>
<Badge type="info" text="double-count.hbs" />
```hbs
<div>{{this.doubleCount}}</div>
```
<Badge type="info" text="double-count.js" />
```js
import Component, { tracked } from "@glimmer/component";

export default class DoubleCount extends Component {
    @tracked count = 10;

    get doubleCount() {
        return this.count * 2;
    }
}
```


<MdH2Component :icon="fw_logo_map.alpine" title="Alpine" id="alpine"/>
<Badge type="info" text="index.html" />
```html
<h1
  x-data="{
  count : 10,
  get doubleCount() { return this.count * 2 }
}"
  x-text="doubleCount"
></h1>

```


<MdH2Component :icon="fw_logo_map.aurelia" title="Aurelia" id="aurelia"/>
<Badge type="info" text="double-count.html" />
```html
<template>
  <div>${doubleCount}</div>
</template>
```
<Badge type="info" text="double-count.ts" />
```ts
export class DoubleCount {
  count: number = 10;
  doubleCount = this.count * 2;
}
```
