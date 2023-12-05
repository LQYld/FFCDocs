# Dom ref

<script setup>
import { fw_logo_map } from '../common/config';
import MdH2Component from '../components/MdH2Component.vue'
</script>

<MdH2Component :icon="fw_logo_map.vue" title="Vue2" id="vue2"/>
<Badge type="info" text="InputFocused.vue" />
```vue
<script>
export default {
  mounted() {
    this.$refs.inputElement.focus();
  },
};
</script>

<template>
  <input ref="inputElement">
</template>
```

<MdH2Component :icon="fw_logo_map.vue" title="Vue3" id="vue3"/>
<Badge type="info" text="InputFocused.vue" />
```vue
<script setup>
import { ref, onMounted } from "vue";

const inputElement = ref();

onMounted(() => {
    inputElement.value.focus();
});
</script>

<template>
  <input ref="inputElement">
</template>
```

<MdH2Component :icon="fw_logo_map.react" title="React" id="react"/>
<Badge type="info" text="InputFocused.jsx" />
```jsx
import { useEffect, useRef } from "react";

export default function InputFocused() {
    const inputElement = useRef(null);

    useEffect(() => inputElement.current.focus(), []);

    return <input type="text" ref={inputElement} />;
}
```

<MdH2Component :icon="fw_logo_map.svelte" title="Svelte" id="svelte"/>
<Badge type="info" text="InputFocused.svelte" />
```svelte
<script>
  import { onMount } from "svelte";

  let inputElement;

  onMount(() => {
   inputElement.focus();
  });
</script>

<input bind:this={inputElement} />
```

<MdH2Component :icon="fw_logo_map.solidJS" title="SolidJS" id="solidJS"/>
<Badge type="info" text="InputFocused.jsx" />
```jsx
import { onMount } from "solid-js";

export default function InputFocused() {
    let inputElement;

    onMount(() => inputElement.focus());

    return <input ref={inputElement} type="text" />;
}
```

<MdH2Component :icon="fw_logo_map.qwik" title="Qwik" id="qwik"/>
<Badge type="info" text="InputFocused.tsx" />
```tsx
import { component$, useClientEffect$, useRef } from "@builder.io/qwik";

export const InputFocused = component$(() => {
  const inputElement = useRef(null);

  useClientEffect$(() => inputElement.current.focus());

  return <input type="text" ref={inputElement} />;
});
```

<MdH2Component :icon="fw_logo_map.angular" title="Angular" id="angular"/>
<Badge type="info" text="inputfocused.component.ts" />
```jsx
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
    selector: "app-inputfocused",
    template: `<input type="text" #inputRef />`,
})
export class InputfocusedComponent implements OnInit {
    @ViewChild("inputRef", { static: true })
    inputRef!: ElementRef<HTMLInputElement>;

    ngOnInit() {
        this.inputRef.nativeElement.focus();
    }
}
```

<MdH2Component :icon="fw_logo_map.lit" title="Lit" id="lit"/>
<Badge type="info" text="input-focused.js" />
```js
import { LitElement, html } from "lit";
import { customElement, state, query } from "lit/decorators.js";

@customElement("input-focused")
export class InputFocused extends LitElement {
  @query("input") inputEl;

  firstUpdated() {
    this.inputEl.focus();
  }

  render() {
    return html`<input type="text" />`;
  }
}
```

<MdH2Component :icon="fw_logo_map.ember" title="Ember" id="ember"/>
<Badge type="info" text="input-focused.hbs" />
```hbs
<input {{this.autofocus}} />
```
<Badge type="info" text="input-focused.js" />
```js
import Component from "@glimmer/component";
import { modifier } from "ember-modifier";

export default class InputFocused extends Component {
    autofocus = modifier((element) => element.focus());
}

/**
* modifier: https://github.com/ember-modifier/ember-modifier
*
* See also:
*  - https://github.com/emberjs/rfcs/pull/811
*    - ember-modifier becomes default part of blueprint
*  - https://github.com/emberjs/rfcs/pull/757
*    - dependencyless support for using
*       `autofocus = element => element.focus()`
*       instead
*/
```

<MdH2Component :icon="fw_logo_map.alpine" title="Alpine" id="alpine"/>
<Badge type="info" text="index.html" />
```html
<input x-init="$el.focus();" />
```

<MdH2Component :icon="fw_logo_map.aurelia" title="Aurelia" id="aurelia"/>
<Badge type="info" text="input-focused.html" />
```html
<template>
  <input ref="inputElement" />
</template>
```
<Badge type="info" text="input-focused.ts" />
```ts
export class InputFocused {
  inputElement: HTMLInputElement;

  attached() {
   this.inputElement.focus();
  }
}
```