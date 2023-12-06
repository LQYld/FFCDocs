# Emit to parent

<script setup>
import { fw_logo_map } from '../common/config';
import MdH2Component from '../components/MdH2Component.vue'
</script>

<MdH2Component :icon="fw_logo_map.vue" title="Vue2" id="vue2"/>
<Badge type="info" text="App.vue" />
```vue
<script>
import AnswerButton from "./AnswerButton.vue";
export default {
  components: {
    AnswerButton,
  },
  data() {
    return {
      isHappy: true,
    };
  },
  methods: {
    onAnswerNo() {
      this.isHappy = false;
    },
    onAnswerYes() {
      this.isHappy = true;
    },
  },
};
</script>

<template>
  <div>
    <p>Are you happy?</p>
    <AnswerButton
      @yes="onAnswerYes"
      @no="onAnswerNo"
    />
    <p style="font-size: 50px">
      {{ isHappy ? "😀" : "😥" }}
    </p>
  </div>
</template>
```
<Badge type="info" text="AnswerButton.vue" />
```vue
<script>
export default {
  methods: {
    clickYes() {
      this.$emit("yes");
    },
    clickNo() {
      this.$emit("no");
    },
  },
};
</script>

<template>
  <div>
    <button @click="clickYes">YES</button>

    <button @click="clickNo">NO</button>
  </div>
</template>
```

<MdH2Component :icon="fw_logo_map.vue" title="Vue3" id="vue3"/>
<Badge type="info" text="App.vue" />
```vue
<script setup>
import { ref } from "vue";
import AnswerButton from "./AnswerButton.vue";

let isHappy = ref(true);

function onAnswerNo() {
    isHappy.value = false;
}

function onAnswerYes() {
    isHappy.value = true;
}
</script>

<template>
  <p>Are you happy?</p>
  <AnswerButton
    @yes="onAnswerYes"
    @no="onAnswerNo"
  />
  <p style="font-size: 50px">
    {{ isHappy ? "😀" : "😥" }}
  </p>
</template>
```
<Badge type="info" text="AnswerButton.vue" />
```vue
<script setup>
const emit = defineEmits(["yes", "no"]);

function clickYes() {
    emit("yes");
}

function clickNo() {
    emit("no");
}
</script>

<template>
  <button @click="clickYes">YES</button>

  <button @click="clickNo">NO</button>
</template>
```


<MdH2Component :icon="fw_logo_map.react" title="React" id="react"/>
<Badge type="info" text="App.jsx" />
```jsx
import { useState } from "react";
import AnswerButton from "./AnswerButton.jsx";

export default function App() {
    const [isHappy, setIsHappy] = useState(true);

    function onAnswerNo() {
        setIsHappy(false);
    }

    function onAnswerYes() {
        setIsHappy(true);
    }

    return (
        <>
            <p>Are you happy?</p>
            <AnswerButton onYes={onAnswerYes} onNo={onAnswerNo} />
            <p style={{ fontSize: 50 }}>{isHappy ? "😀" : "😥"}</p>
        </>
    );
}
```
<Badge type="info" text="AnswerButton.jsx" />
```jsx
import PropTypes from "prop-types";

export default function AnswerButton({ onYes, onNo }) {
  return (
    <>
      <button onClick={onYes}>YES</button>

      <button onClick={onNo}>NO</button>
    </>
  );
}

AnswerButton.propTypes = {
  onYes: PropTypes.func,
  onNo: PropTypes.func,
};
```

<MdH2Component :icon="fw_logo_map.svelte" title="Svelte" id="svelte"/>
<Badge type="info" text="App.svelte" />
```svelte
<script>
  import AnswerButton from "./AnswerButton.svelte";

  let isHappy = true;

  function onAnswerNo() {
    isHappy = false;
  }

  function onAnswerYes() {
    isHappy = true;
  }
</script>

<p>Are you happy?</p>
<AnswerButton on:yes={onAnswerYes} on:no={onAnswerNo} />
<p style="font-size: 50px;">{isHappy ? "😀" : "😥"}</p>
```
<Badge type="info" text="AnswerButton.svelte" />
```svelte
<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function clickYes() {
    dispatch("yes");
  }

  function clickNo() {
    dispatch("no");
  }
</script>

<button on:click={clickYes}> YES </button>

<button on:click={clickNo}> NO </button>
```

<MdH2Component :icon="fw_logo_map.solidJS" title="SolidJS" id="solidJS"/>
<Badge type="info" text="App.jsx" />
```jsx
import { createSignal } from "solid-js";
import AnswerButton from "./AnswerButton.jsx";

export default function App() {
    const [isHappy, setIsHappy] = createSignal(true);

    function onAnswerNo() {
        setIsHappy(false);
    }

    function onAnswerYes() {
        setIsHappy(true);
    }

    return (
        <>
            <p>Are you happy?</p>
            <AnswerButton onYes={onAnswerYes} onNo={onAnswerNo} />
            <p style={{ "font-size": "50px" }}>{isHappy() ? "😀" : "😥"}</p>
        </>
    );
}
```
<Badge type="info" text="AnswerButton.jsx" />
```jsx
export default function AnswerButton(props) {
  return (
    <>
      <button onClick={() => props.onYes()}>YES</button>
      <button onClick={() => props.onNo()}>NO</button>
    </>
  );
}
```


<MdH2Component :icon="fw_logo_map.qwik" title="Qwik" id="qwik"/>
<Badge type="info" text="App.tsx" />
```tsx
import { $, component$, useStore } from "@builder.io/qwik";
import AnswerButton from "./AnswerButton";

const App = component$(() => {
    const store = useStore({
    isHappy: true,
});

const onAnswerNo = $(() => {
    store.isHappy = false;
});

const onAnswerYes = $(() => {
    store.isHappy = true;
});

return (
        <>
            <p>Are you happy?</p>
            <AnswerButton onYes$={onAnswerYes} onNo$={onAnswerNo} />
            <p style={{ fontSize: 50 }}>{store.isHappy ? "ðŸ˜€" : "ðŸ˜¥"}</p>
        </>
    );
});

export default App;
```
<Badge type="info" text="AnswerButton.tsx" />
```tsx
import { component$, PropFunction } from "@builder.io/qwik";

type Props = {
  onYes$: PropFunction<() => void>;
  onNo$: PropFunction<() => void>;
};

const AnswerButton = component$((props: Props) => {
  return (
    <>
      <button onClick$={props.onYes$}>YES</button>

      <button onClick$={props.onNo$}>NO</button>
    </>
  );
});

export default AnswerButton;
```


<MdH2Component :icon="fw_logo_map.angular" title="Angular" id="angular"/>
<Badge type="info" text="app.component.ts" />
```ts
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <p>Are you happy?</p>

        <app-answer-button (yes)="onAnswerYes()" (no)="onAnswerNo()">
        </app-answer-button>

        <p style="font-size: 50px">{{ isHappy ? "😀" : "😥" }}</p>
    `,
})
export class AppComponent {
    isHappy = true;

    onAnswerYes() {
        this.isHappy = true;
    }

    onAnswerNo() {
        this.isHappy = false;
    }
}
```
<Badge type="info" text="answer-button.component.ts" />
```ts
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-answer-button",
  template: `
    <button (click)="yes.emit()">YES</button>
    <button (click)="no.emit()">NO</button>
  `,
})
export class AnswerButtonComponent {
  @Output() yes = new EventEmitter<void>();
  @Output() no = new EventEmitter<void>();
}
```

<MdH2Component :icon="fw_logo_map.lit" title="Lit" id="lit"/>
<Badge type="info" text="x-app.js" />
```js
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import "./answer-button";

@customElement("x-app")
export class XApp extends LitElement {
    @state()
    isHappy = true;

    onAnswerNo() {
        this.isHappy = false;
    }

    onAnswerYes() {
        this.isHappy = true;
    }

    render() {
        return html`
            <p>Are you happy?</p>
            <answer-button
                @yes=${this.onAnswerYes}
                @no=${this.onAnswerNo}
            ></answer-button>
            <p style="font-size: 50px;">${this.isHappy ? "😀" : "😥"}</p>
        `;
    }
}
```
<Badge type="info" text="answer-button.js" />
```js
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("answer-button")
export class AnswerButton extends LitElement {
  clickYes() {
    this.dispatchEvent(new Event("yes"));
  }

  clickNo() {
    this.dispatchEvent(new Event("no"));
  }

  render() {
    return html`
      <button @click=${this.clickYes}>Yes</button>
      <button @click=${this.clickNo}>No</button>
    `;
  }
}
```


<MdH2Component :icon="fw_logo_map.ember" title="Ember" id="ember"/>
<Badge type="info" text="app.hbs" />
```hbs
<p>Are you happy?</p>
<AnswerButton @onYes={{this.handleYes}} @onNo={{this.handleNo}} />
<p style="font-size: 50px;">{{if this.isHappy "😀" "😥"}}</p>
```
<Badge type="info" text="app.js" />
```js
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class App extends Component {
    @tracked isHappy = true;

    handleYes = () => (this.isHappy = true);
    handleNo = () => (this.isHappy = false);
}
```
<Badge type="info" text="answer-button.hbs" />
```hbs
<button {{on "click" @onYes}}> YES </button>
<button {{on "click" @onNo}}> NO </button>
```

<MdH2Component :icon="fw_logo_map.alpine" title="Alpine" id="alpine"/>
<Badge type="info" text="index.html" />
```html
<div
  x-data="{ isHappy: true }"
  x-on:yes="isHappy = true"
  x-on:no="isHappy = false"
>
  <p>Are you happy?</p>
  <div>
    <button x-on:click="$dispatch('yes')">YES</button>
    <button x-on:click="$dispatch('no')">NO</button>
  </div>
  <p style="font-size: 50px" x-text="isHappy ? '😀' : '😥'"></p>
</div>
```


<MdH2Component :icon="fw_logo_map.aurelia" title="Aurelia" id="aurelia"/>
<Badge type="info" text="app.html" />
```html
<template>
  <require from="./answer-button"></require>
  <p>Can I come ?</p>
  <answer-button action-handler.call="handleAnswer(reply)"></answer-button>
  <p style="font-size: 50px">${isHappy ? "😀" : "😥"}</p>
</template>
```
<Badge type="info" text="app.ts" />
```ts
export class App {
  isHappy = false;

  handleAnswer(...reply) {
    this.isHappy = reply[0] === "yes" ? true : false;
  }
}
```
<Badge type="info" text="answer-button.html" />
```html
<template>
  <button click.trigger="clickYes()">YES</button>
  <button click.trigger="clickNo()">NO</button>
</template>
```
<Badge type="info" text="answer-button.ts" />
```ts
import { customElement, bindable } from "aurelia-templating";

@customElement("answer-button")
export class AnswerButton {
    @bindable actionHandler;

    clickYes() {
        this.actionHandler({ reply: "yes" });
    }

    clickNo() {
        this.actionHandler({ reply: "no" });
    }
}
```