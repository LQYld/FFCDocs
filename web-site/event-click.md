# Event click

<script setup>
import { fw_logo_map } from '../common/config';
import MdH2Component from '../components/MdH2Component.vue'
</script>

<MdH2Component :icon="fw_logo_map.vue" title="Vue2" id="vue2"/>
<Badge type="info" text="Counter.vue" />
```vue
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
  },
};
</script>

<template>
  <div>
    <p>Counter: {{ count }}</p>
    <button @click="incrementCount">+1</button>
  </div>
</template>
```

<MdH2Component :icon="fw_logo_map.vue" title="Vue3" id="vue3"/>
<Badge type="info" text="Counter.vue" />
```vue
<script setup>
import { ref } from "vue";
const count = ref(0);

function incrementCount() {
count.value++;
}
</script>

<template>
  <p>Counter: {{ count }}</p>
  <button @click="incrementCount">+1</button>
</template>
```

<MdH2Component :icon="fw_logo_map.react" title="React" id="react"/>
<Badge type="info" text="Counter.jsx" />
```jsx
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount((count) => count + 1);
    }

    return (
        <>
            <p>Counter: {count}</p>
            <button onClick={incrementCount}>+1</button>
        </>
    );
}
```

<MdH2Component :icon="fw_logo_map.svelte" title="Svelte" id="svelte"/>
<Badge type="info" text="Counter.svelte" />
```svelte
<script>
  let count = 0;

  function incrementCount() {
    count++;
  }
</script>

<p>Counter: {count}</p>
<button on:click={incrementCount}>+1</button>
```

<MdH2Component :icon="fw_logo_map.solidJS" title="SolidJS" id="solidJS"/>
<Badge type="info" text="Counter.vue" />
```jsx
import { createSignal } from "solid-js";

export default function Counter() {
    const [count, setCount] = createSignal(0);

    function incrementCount() {
        setCount(count() + 1);
    }

    return (
        <>
            <p>Counter: {count()}</p>
            <button onClick={incrementCount}>+1</button>
        </>
    );
}
```

<MdH2Component :icon="fw_logo_map.qwik" title="Qwik" id="qwik"/>
<Badge type="info" text="Counter.tsx" />
```tsx
import { component$, useStore } from "@builder.io/qwik";

export const Counter = component$(() => {
  const store = useStore({ count: 0 });

  const incrementCount = () => {
    store.count++;
  };

  return (
    <>
      <p>Counter: {store.count}</p>
      <button onClick$={incrementCount}>Increment</button>
    </>
  );
});
```

<MdH2Component :icon="fw_logo_map.angular" title="Angular" id="angular"/>
<Badge type="info" text="counter.component.ts" />
```ts
import { Component } from "@angular/core";

@Component({
    selector: "app-counter",
    template: `
    <p>Counter: {{ count }}</p>
        <button (click)="incrementCount()">+1</button>
    `,
})
export class CounterComponent {
    count = 0;

    incrementCount() {
        this.count++;
    }
}
```

<MdH2Component :icon="fw_logo_map.lit" title="Lit" id="lit"/>
<Badge type="info" text="x-counter.js" />
```js
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("x-counter")
export class XCounter extends LitElement {
  @state()
  count = 0;

  incrementCount() {
    this.count = this.count + 1;
  }

  render() {
    return html`
      <p>Counter: ${this.count}</p>
      <button @click=${this.incrementCount}>+1</button>
    `;
  }
}
```

<MdH2Component :icon="fw_logo_map.ember" title="Ember" id="ember"/>
<Badge type="info" text="counter.hbs" />
```hbs
<p>Counter: {{this.count}}</p>
<button {{on "click" this.incrementCount}}>+1</button>
```
<Badge type="info" text="counter.js" />
```js
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class Counter extends Component {
    @tracked count = 0;

    incrementCount = () => this.count++;
}
```

<MdH2Component :icon="fw_logo_map.alpine" title="Alpine" id="alpine"/>
<Badge type="info" text="index.html" />
```html
<div x-data="{ count: 0 }">
  <p>Counter: <span x-text="count"></span></p>
  <button x-on:click="count++">+1</button>
</div>
```

<MdH2Component :icon="fw_logo_map.aurelia" title="Aurelia" id="aurelia"/>
<Badge type="info" text="counter.html" />
```html
<template>
  <p>Counter: ${count}</p>
  <button click.trigger="incrementCount()">+1</button>
</template>
```
```ts
export class Counter {
  count: number = 0;

  incrementCount() {
    this.count++;
  }
}
```