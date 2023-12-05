# Conditional

<script setup>
import { fw_logo_map } from '../common/config';
import MdH2Component from '../components/MdH2Component.vue'
</script>

<MdH2Component :icon="fw_logo_map.vue" title="Vue2" id="vue2"/>
<Badge type="info" text="TrafficLight.vue" />
```vue
<script>
export default {
  data() {
    return {
      TRAFFIC_LIGHTS: ["red", "orange", "green"],
      lightIndex: 0,
    };
  },
  computed: {
    light() {
      return this.TRAFFIC_LIGHTS[this.lightIndex];
    },
  },
  methods: {
    nextLight() {
      this.lightIndex = (this.lightIndex + 1) % this.TRAFFIC_LIGHTS.length;
    },
  },
};
</script>

<template>
  <div>
    <button @click="nextLight">Next light</button>
    <p>Light is: {{ light }}</p>
    <p>
      You must
      <span v-if="light === 'red'">STOP</span>
      <span v-else-if="light === 'orange'">SLOW DOWN</span>
      <span v-else-if="light === 'green'">GO</span>
    </p>
  </div>
</template>
```

<MdH2Component :icon="fw_logo_map.vue" title="Vue3" id="vue3"/>
<Badge type="info" text="TrafficLight.vue" />
```vue
<script setup>
import { ref, computed } from "vue";
const TRAFFIC_LIGHTS = ["red", "orange", "green"];
const lightIndex = ref(0);

const light = computed(() => TRAFFIC_LIGHTS[lightIndex.value]);

function nextLight() {
lightIndex.value = (lightIndex.value + 1) % TRAFFIC_LIGHTS.length;
}
</script>

<template>
  <button @click="nextLight">Next light</button>
  <p>Light is: {{ light }}</p>
  <p>
    You must
    <span v-if="light === 'red'">STOP</span>
    <span v-else-if="light === 'orange'">SLOW DOWN</span>
    <span v-else-if="light === 'green'">GO</span>
  </p>
</template>
```

<MdH2Component :icon="fw_logo_map.react" title="React" id="react"/>
<Badge type="info" text="TrafficLight.jsx" />
```jsx
import { useState } from "react";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export default function TrafficLight() {
    const [lightIndex, setLightIndex] = useState(0);

    const light = TRAFFIC_LIGHTS[lightIndex];

    function nextLight() {
        setLightIndex((lightIndex + 1) % TRAFFIC_LIGHTS.length);
    }

    return (
        <>
            <button onClick={nextLight}>Next light</button>
            <p>Light is: {light}</p>
            <p>
                You must
                {light === "red" && <span>STOP</span>}
                {light === "orange" && <span>SLOW DOWN</span>}
                {light === "green" && <span>GO</span>}
            </p>
        </>
    );
}
```

<MdH2Component :icon="fw_logo_map.svelte" title="Svelte" id="svelte"/>
<Badge type="info" text="TrafficLight.svelte" />
```svelte
<script>
  const TRAFFIC_LIGHTS = ["red", "orange", "green"];
  let lightIndex = 0;

  $: light = TRAFFIC_LIGHTS[lightIndex];

  function nextLight() {
   lightIndex = (lightIndex + 1) % TRAFFIC_LIGHTS.length;
  }
</script>

<button on:click={nextLight}>Next light</button>
<p>Light is: {light}</p>
<p>
  You must
  {#if light === "red"}
    <span>STOP</span>
  {:else if light === "orange"}
    <span>SLOW DOWN</span>
  {:else if light === "green"}
    <span>GO</span>
  {/if}
</p>
```

<MdH2Component :icon="fw_logo_map.solidJS" title="SolidJS" id="solidJS"/>
<Badge type="info" text="TrafficLight.jsx" />
```jsx
import { createSignal, Switch, Match } from "solid-js";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export default function TrafficLight() {
    const [lightIndex, setLightIndex] = createSignal(0);

    const light = () => TRAFFIC_LIGHTS[lightIndex()];

    function nextLight() {
        setLightIndex((lightIndex() + 1) % TRAFFIC_LIGHTS.length);
    }

    return (
        <>
            <button onClick={nextLight}>Next light</button>
            <p>Light is: {light()}</p>
            <p>
                You must
                <Switch>
                    <Match when={light() === "red"}>
                        <span>STOP</span>
                    </Match>
                    <Match when={light() === "orange"}>
                        <span>SLOW DOWN</span>
                    </Match>
                    <Match when={light() === "green"}>
                        <span>GO</span>
                    </Match>
                </Switch>
            </p>
        </>
    );
}
```

<MdH2Component :icon="fw_logo_map.qwik" title="Qwik" id="qwik"/>
<Badge type="info" text="TrafficLight.tsx" />
```tsx
import { $, component$, useStore } from "@builder.io/qwik";

export const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export const App = component$(() => {
  const store = useStore({
    lightIndex: 0,
  });

  const light = TRAFFIC_LIGHTS[store.lightIndex];

  const nextLight = $(() => {
    store.lightIndex = (store.lightIndex + 1) % TRAFFIC_LIGHTS.length;
  });

  return (
    <>
      <button onClick$={nextLight}>Next light</button>
      <p>Light is: {light}</p>
      <p>
        You must
        {light === "red" && <span>STOP</span>}
        {light === "orange" && <span>SLOW DOWN</span>}
        {light === "green" && <span>GO</span>}
      </p>
    </>
  );
});
```

<MdH2Component :icon="fw_logo_map.angular" title="Angular" id="angular"/>
<Badge type="info" text="trafficlight.component.ts" />
```ts
import { Component } from "@angular/core";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

@Component({
    selector: "app-trafficlight",
    template: `
        <button (click)="nextLight()">Next light</button>
        <p>Light is: {{ light }}</p>
        <p>
            You must
            <ng-container [ngSwitch]="light">
                <span *ngSwitchCase="'red'">STOP</span>
                <span *ngSwitchCase="'orange'">SLOW DOWN</span>
                <span *ngSwitchCase="'green'">GO</span>
            </ng-container>
        </p>
    `,
})
export class TrafficlightComponent {
    lightIndex = 0;

    get light() {
        return TRAFFIC_LIGHTS[this.lightIndex];
    }

    nextLight() {
        this.lightIndex = (this.lightIndex + 1) % TRAFFIC_LIGHTS.length;
    }
}
```

<MdH2Component :icon="fw_logo_map.lit" title="Lit" id="lit"/>
<Badge type="info" text="traffic-light.js" />
```js
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { choose } from "lit/directives/choose.js";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

@customElement("traffic-light")
export class TrafficLight extends LitElement {
  @state()
  lightIndex = 0;

  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex];
  }

  nextLight() {
    this.lightIndex = (this.lightIndex + 1) % TRAFFIC_LIGHTS.length;
  }

  render() {
    return html`
      <button @click=${this.nextLight}>Next light</button>
      <p>Light is ${this.light}</p>
      <p>
        You must
        ${choose(this.light, [
          ["red", () => html`<span>STOP</span>`],
          ["orange", () => html`<span>SLOW DOWN</span>`],
          ["green", () => html`<span>GO</span>`],
        ])}
      </p>
    `;
  }
}
```

<MdH2Component :icon="fw_logo_map.ember" title="Ember" id="ember"/>
<Badge type="info" text="traffic-light.hbs" />
```hbs
<button {{on "click" this.nextLight}}>Next light</button>
<p>Light is: {{this.light}}</p>
<p>
  You must
  {{#if (eq this.light "red")}}
    STOP
  {{else if (eq this.light "orange")}}
    SLOW DOWN
  {{else if (eq this.light "green")}}
    GO
  {{/if}}
</p>
```
<Badge type="info" text="traffic-light.js" />
```js
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

const TRAFFIC_LIGHTS = ["red", "orange", "green"];

export default class TrafficLight extends Component {
    @tracked lightIndex = 0;

    get light() {
        return TRAFFIC_LIGHTS[this.lightIndex];
    }

    nextLight = () => {
        this.lightIndex = (this.lightIndex + 1) % TRAFFIC_LIGHTS.length;
    };
}
```

<MdH2Component :icon="fw_logo_map.alpine" title="Alpine" id="alpine"/>
<Badge type="info" text="index.html" />
```html
<div
  x-data="{
  TRAFFIC_LIGHTS: ['red', 'orange', 'green'],
  lightIndex: 0,
  get light() { return this.TRAFFIC_LIGHTS[this.lightIndex] },
  nextLight() {
    this.lightIndex = (this.lightIndex + 1) % this.TRAFFIC_LIGHTS.length;
  }
}"
>
  <button x-on:click="nextLight">Next light</button>
  <p>Light is: <span x-text="light"></span></p>
  <p>
    You must
    <span x-show="light === 'red'">STOP</span>
    <span x-show="light === 'orange'">SLOW DOWN</span>
    <span x-show="light === 'green'">GO</span>
  </p>
</div>
```

<MdH2Component :icon="fw_logo_map.aurelia" title="Aurelia" id="aurelia"/>
<Badge type="info" text="traffic-light.html" />
```html
<template>
  <button click.trigger="nextLight()">Next light</button>
  <p>Light is: ${light}</p>
  <p>
    You must
    <span if.bind="light === 'red'">STOP</span>
    <span if.bind="light === 'orange'">SLOW DOWN</span>
    <span if.bind="light === 'green'">GO</span>
  </p>
</template>
```
<Badge type="info" text="traffic-light.ts" />
```ts
export class App {
  TRAFFIC_LIGHTS = ["red", "orange", "green"];
  lightIndex = 0;
  light: string = this.TRAFFIC_LIGHTS[this.lightIndex];

  nextLight() {
   this.lightIndex = (this.lightIndex + 1) % this.TRAFFIC_LIGHTS.length;
   this.light = this.TRAFFIC_LIGHTS[this.lightIndex];
  }
}
```