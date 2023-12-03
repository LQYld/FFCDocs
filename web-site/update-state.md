# Update state

<script setup>
import { fw_logo_map } from '../common/config';
import MdH2Component from '../components/MdH2Component.vue'
</script>

<MdH2Component :icon="fw_logo_map.vue" title="Vue2" id="vue2"/>
<Badge type="info" text="Name.vue" />
```vue
<script>
export default {
  data() {
    return {
      name: "John",
    };
  },
  created() {
    this.name = "Jane";
  },
};
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>
```

<MdH2Component :icon="fw_logo_map.vue" title="Vue3" id="vue3"/>
<Badge type="info" text="Name.vue" />
```vue
<script setup>
import { ref } from "vue";
const name = ref("John");
name.value = "Jane";
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template>
```

<MdH2Component :icon="fw_logo_map.react" title="React" id="react"/>
<Badge type="info" text="Name.jsx" />
```jsx
import { useEffect, useState } from "react";

export default function Name() {
    const [name, setName] = useState("John");

    useEffect(() => {
        setName("Jane");
    }, []);

    return <h1>Hello {name}</h1>;
}
```

<MdH2Component :icon="fw_logo_map.svelte" title="Svelte" id="svelte"/>
<Badge type="info" text="Name.svelte" />
```svelte
<script>
  let name = "John";
  name = "Jane";
</script>

<h1>Hello {name}</h1>
```

<MdH2Component :icon="fw_logo_map.solidJS" title="SolidJS" id="solidJS"/>
<Badge type="info" text="Name.jsx" />
```jsx
import { createSignal } from "solid-js";

export default function Name() {
    const [name, setName] = createSignal("John");
    setName("Jane");

    return <h1>Hello {name()}</h1>;
}
```

<MdH2Component :icon="fw_logo_map.qwik" title="Qwik" id="qwik"/>
<Badge type="info" text="Name.tsx" />
```tsx
import { component$, useStore } from "@builder.io/qwik";

export const Name = component$(() => {
  const store = useStore({ name: "John" });
  store.name = "Jane";

  return <h1>Hello {store.name}</h1>;
});
```

<MdH2Component :icon="fw_logo_map.angular" title="Angular" id="angular"/>
<Badge type="info" text="name.component.ts" />
```ts
import { Component } from "@angular/core";

@Component({
    selector: "app-name",
    template: `<h1>Hello {{ name }}</h1>`,
})
export class NameComponent {
    name = "John";

    constructor() {
        this.name = "Jane";
    }
}
```

<MdH2Component :icon="fw_logo_map.lit" title="Lit" id="lit"/>
<Badge type="info" text="name.js" />
```js
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("x-name")
export class XName extends LitElement {
  @state()
  name = "John";

  constructor() {
    super();
    this.name = "Jane";
  }

  render() {
    return html`<h1>Hello ${this.name}!</h1>`;
  }
}

```

<MdH2Component :icon="fw_logo_map.ember" title="Ember" id="ember"/>
<Badge type="info" text="name.hbs" />
```hbs
<h1>Hello {{this.name}}</h1>
```
<Badge type="info" text="name.js" />
```js
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class CounterComponent extends Component {
    @tracked name = "John";

    constructor(owner, args) {
        super(owner, args);

        this.name = "Jane";
    }
}
```

<MdH2Component :icon="fw_logo_map.alpine" title="Alpine" id="alpine"/>
<Badge type="info" text="index.html" />
```html
<h1 x-data="{ name: 'John' }" x-init="name = 'Jane'" x-text="name"></h1>
```

<MdH2Component :icon="fw_logo_map.aurelia" title="Aurelia" id="aurelia"/>
<Badge type="info" text="name.html" />
```html
<template>
  <h1>Hello ${name}</h1>
</template>
```
<Badge type="info" text="name.ts" />
```ts
export class Name {
    name = "John";

    constructor() {
        this.name = "Jane";
    }
}
```