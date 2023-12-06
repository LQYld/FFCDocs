# On unmount

<script setup>
import { fw_logo_map } from '../common/config';
import MdH2Component from '../components/MdH2Component.vue'
</script>

<MdH2Component :icon="fw_logo_map.vue" title="Vue2" id="vue2"/>
<Badge type="info" text="Time.vue" />
```vue
<script>
export default {
  data() {
    return {
      time: new Date().toLocaleTimeString(),
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<template>
  <p>Current time: {{ time }}</p>
</template>
```

<MdH2Component :icon="fw_logo_map.vue" title="Vue3" id="vue3"/>
<Badge type="info" text="Time.vue" />
```vue
<script setup>
import { ref, onUnmounted } from "vue";

const time = ref(new Date().toLocaleTimeString());

const timer = setInterval(() => {
    time.value = new Date().toLocaleTimeString();
}, 1000);

onUnmounted(() => {
    clearInterval(timer);
});
</script>

<template>
  <p>Current time: {{ time }}</p>
</template>
```

<MdH2Component :icon="fw_logo_map.react" title="React" id="react"/>
<Badge type="info" text="Time.jsx" />
```jsx
import { useState, useEffect } from "react";

export default function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
}, []);

    return <p>Current time: {time}</p>;
}
```

<MdH2Component :icon="fw_logo_map.svelte" title="Svelte" id="svelte"/>
<Badge type="info" text="Time.svelte" />
```svelte
<script>
  import { onDestroy } from "svelte";

    let time = new Date().toLocaleTimeString();
    
    const timer = setInterval(() => {
        time = new Date().toLocaleTimeString();
    }, 1000);
    
    onDestroy(() => clearInterval(timer));
</script>
    
<p>Current time: {time}</p>
```

<MdH2Component :icon="fw_logo_map.solidJS" title="SolidJS" id="solidJS"/>
<Badge type="info" text="Time.jsx" />
```jsx
import { createSignal, onCleanup } from "solid-js";

export default function Time() {
    const [time, setTime] = createSignal(new Date().toLocaleTimeString());

    const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    onCleanup(() => clearInterval(timer));

    return <p>Current time: {time()}</p>;
}
```

<MdH2Component :icon="fw_logo_map.qwik" title="Qwik" id="qwik"/>
<Badge type="info" text="Time.tsx" />
```tsx
import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

export const App = component$(() => {
  const store = useStore({
    time: new Date().toLocaleTimeString(),
  });

  useClientEffect$(() => {
    const timer = setInterval(() => {
      store.time = new Date().toLocaleTimeString();
    }, 1000);

    return () => clearInterval(timer);
  });

  return <p>Current time: {store.time}</p>;
});
```

<MdH2Component :icon="fw_logo_map.angular" title="Angular" id="angular"/>
<Badge type="info" text="time.component.ts" />
```ts
import { Component, OnDestroy } from "@angular/core";

@Component({
    selector: "app-time",
    template: `<p>Current time: {{ time }}</p>`,
})
export class TimeComponent implements OnDestroy {
    time: string = new Date().toLocaleTimeString();
    timer: number;

    constructor() {
        this.timer = setInterval(() => {
            this.time = new Date().toLocaleTimeString();
        }, 1000);
    }

    ngOnDestroy() {
        clearInterval(this.timer);
    }
}
```

<MdH2Component :icon="fw_logo_map.lit" title="Lit" id="lit"/>
<Badge type="info" text="x-time.js" />
```js
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("x-time")
export class XTime extends LitElement {
  @state()
  time = "";

  timer;

  connectedCallback() {
    super.connectedCallback();
    this.timer = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.timer);
  }

  render() {
    return html`<p>Current time: ${this.time}</p>`;
  }
}
```

<MdH2Component :icon="fw_logo_map.ember" title="Ember" id="ember"/>
<Badge type="info" text="time.hbs" />
```hbs
<p>Current time: {{this.time}}</p>
```
<Badge type="info" text="time.js" />
```js
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { registerDestructor } from "@ember/destroyable";

export default class Time extends Component {
@tracked time = new Date().toLocaleTimeString();

constructor(owner, args) {
    super(owner, args);

    let timer = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);

    registerDestructor(this, () => clearInterval(timer));
    }
}
```

<MdH2Component :icon="fw_logo_map.alpine" title="Alpine" id="alpine"/>
<Badge type="info" text="index.html" />
```html
<p
  x-data="{
  time: new Date().toLocaleTimeString(),
  timer: null,
  init() { this.timer = setInterval(() => (this.time = new Date().toLocaleTimeString()), 1000) },
  destroy() { clearInterval(this.timer) }
}"
>
  Current time: <span x-text="time"></span>
</p>
```

<MdH2Component :icon="fw_logo_map.aurelia" title="Aurelia" id="aurelia"/>
<Badge type="info" text="time.html" />
```html
<template>
  <p>Current time: ${time}</p>
</template>
```
<Badge type="info" text="time.ts" />
```ts
export class Time {
  time: string = new Date().toLocaleTimeString();
  timer: any;

  constructor() {
    this.timer = setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  detached() {
    clearInterval(this.timer);
  }
}
```