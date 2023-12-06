# On mount

<script setup>
import { fw_logo_map } from '../common/config';
import MdH2Component from '../components/MdH2Component.vue'
</script>

<MdH2Component :icon="fw_logo_map.vue" title="Vue2" id="vue2"/>
<Badge type="info" text="PageTitle.vue" />
```vue
<script>
export default {
  data() {
    return {
      pageTitle: "",
    };
  },
  mounted() {
    this.pageTitle = document.title;
  },
};
</script>

<template>
  <p>Page title: {{ pageTitle }}</p>
</template>
```

<MdH2Component :icon="fw_logo_map.vue" title="Vue3" id="vue3"/>
<Badge type="info" text="PageTitle.vue" />
```vue
<script setup>
import { ref, onMounted } from "vue";
const pageTitle = ref("");
onMounted(() => {
  pageTitle.value = document.title;
});
</script>

<template>
  <p>Page title: {{ pageTitle }}</p>
</template>
```

<MdH2Component :icon="fw_logo_map.react" title="React" id="react"/>
<Badge type="info" text="PageTitle.jsx" />
```jsx
import { useState, useEffect } from "react";

export default function PageTitle() {
    const [pageTitle, setPageTitle] = useState("");

    useEffect(() => {
        setPageTitle(document.title);
    }, []);

    return <p>Page title: {pageTitle}</p>;
}
```

<MdH2Component :icon="fw_logo_map.svelte" title="Svelte" id="svelte"/>
<Badge type="info" text="PageTitle.svelte" />
```svelte
<script>
  import { onMount } from "svelte";
  let pageTitle = "";
  onMount(() => {
    pageTitle = document.title;
  });
</script>

<p>Page title is: {pageTitle}</p>
```

<MdH2Component :icon="fw_logo_map.solidJS" title="SolidJS" id="solidJS"/>
<Badge type="info" text="PageTitle.jsx" />
```jsx
import { createSignal, onMount } from "solid-js";

export default function PageTitle() {
    const [pageTitle, setPageTitle] = createSignal("");

    onMount(() => {
        setPageTitle(document.title);
    });

    return <p>Page title: {pageTitle()}</p>;
}
```

<MdH2Component :icon="fw_logo_map.qwik" title="Qwik" id="qwik"/>
<Badge type="info" text="PageTitle.tsx" />
```tsx
import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

export const App = component$(() => {
  const store = useStore({
    pageTitle: "",
  });

  useClientEffect$(() => {
    store.pageTitle = document.title;
  });

  return <p>Page title: {store.pageTitle}</p>;
});
```

<MdH2Component :icon="fw_logo_map.angular" title="Angular" id="angular"/>
<Badge type="info" text="pagetitle.component.ts" />
```ts
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-pagetitle",
    template: `<p>Page title: {{ pageTitle }}</p>`,
})
export class PagetitleComponent implements OnInit {
    pageTitle = "";

    ngOnInit() {
        this.pageTitle = document.title;
    }
}
```

<MdH2Component :icon="fw_logo_map.lit" title="Lit" id="lit"/>
<Badge type="info" text="page-title.js" />
```js
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("page-title")
export class PageTitle extends LitElement {
  @state()
  pageTitle = "";

  connectedCallback() {
    super.connectedCallback();
    this.pageTitle = document.title;
  }

  render() {
    return html`<p>Page title: ${this.pageTitle}</p>`;
  }
}
```

<MdH2Component :icon="fw_logo_map.ember" title="Ember" id="ember"/>
<Badge type="info" text="page-title.hbs" />
```hbs
<p>Page title is: {{(this.pageTitle)}}</p>
```
<Badge type="info" text="page-title.js" />
```js
import Component from "@glimmer/component";

export default class PageTitle extends Component {
    pageTitle = () => document.title;
}
```

<MdH2Component :icon="fw_logo_map.alpine" title="Alpine" id="alpine"/>
<Badge type="info" text="index.html" />
```html
<p
  x-data="{ pageTitle: '' }"
  x-init="$nextTick(() => { pageTitle = document.title })"
>
  Page title: <span x-text="pageTitle"></span>
</p>
```

<MdH2Component :icon="fw_logo_map.aurelia" title="Aurelia" id="aurelia"/>
<Badge type="info" text="page-title.html" />
```html
<template>
  <p>Page title is: ${pageTitle}</p>
</template>
```
<Badge type="info" text="page-title.ts" />
```ts
export class PageTitle {
  pageTitle = "";

  attached(): void {
    this.pageTitle = document.title;
  }
}
```