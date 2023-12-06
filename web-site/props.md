# Props

<script setup>
import { fw_logo_map } from '../common/config';
import MdH2Component from '../components/MdH2Component.vue'
</script>

<MdH2Component :icon="fw_logo_map.vue" title="Vue2" id="vue2"/>
<Badge type="info" text="App.vue" />
```vue
<script>
import UserProfile from "./UserProfile.vue";

export default {
components: {
UserProfile,
},
};
</script>

<template>
  <UserProfile
    name="John"
    :age="20"
    :favorite-colors="['green', 'blue', 'red']"
    is-available
  />
</template>
```
<Badge type="info" text="UserProfile.vue" />
```vue
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "",
    },
    age: {
      type: Number,
      required: true,
      default: null,
    },
    favoriteColors: {
      type: Array,
      required: true,
      default: () => [],
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<template>
  <div>
    <p>My name is {{ props.name }}!</p>
    <p>My age is {{ props.age }}!</p>
    <p>My favorite colors are {{ props.favoriteColors.join(", ") }}!</p>
    <p>I am {{ props.isAvailable ? "available" : "not available" }}</p>
  </div>
</template>
```

<MdH2Component :icon="fw_logo_map.vue" title="Vue3" id="vue3"/>
<Badge type="info" text="App.vue" />
```vue
<script setup>
import UserProfile from "./UserProfile.vue";
</script>

<template>
  <UserProfile
    name="John"
    :age="20"
    :favourite-colors="['green', 'blue', 'red']"
    is-available
  />
</template>
```
<Badge type="info" text="UserProfile.vue" />
```vue
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: "",
  },
  age: {
    type: Number,
    required: true,
    default: null,
  },
  favouriteColors: {
    type: Array,
    required: true,
    default: () => [],
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>

<template>
  <p>My name is {{ props.name }}!</p>
  <p>My age is {{ props.age }}!</p>
  <p>My favourite colors are {{ props.favouriteColors.join(", ") }}!</p>
  <p>I am {{ props.isAvailable ? "available" : "not available" }}</p>
</template>
```

<MdH2Component :icon="fw_logo_map.react" title="React" id="react"/>
<Badge type="info" text="App.jsx" />
```jsx
import UserProfile from "./UserProfile.jsx";

export default function App() {
    return (
        <UserProfile
            name="John"
            age={20}
            favouriteColors={["green", "blue", "red"]}
            isAvailable
        />
    );
}
```
<Badge type="info" text="UserProfile.jsx" />
```jsx
import PropTypes from "prop-types";

export default function UserProfile({
  name = "",
  age = null,
  favouriteColors = [],
  isAvailable = false,
}) {
  return (
    <>
      <p>My name is {name}!</p>
      <p>My age is {age}!</p>
      <p>My favourite colors are {favouriteColors.join(", ")}!</p>
      <p>I am {isAvailable ? "available" : "not available"}</p>
    </>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  favouriteColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  isAvailable: PropTypes.bool.isRequired,
};
```

<MdH2Component :icon="fw_logo_map.svelte" title="Svelte" id="svelte"/>
<Badge type="info" text="App.svelte" />
```svelte
<script>
  import UserProfile from "./UserProfile.svelte";
</script>

<UserProfile
  name="John"
  age={20}
  favouriteColors={["green", "blue", "red"]}
  isAvailable
/>
```
<Badge type="info" text="UserProfile.svelte" />
```svelte
<script>
  export let name = "";
  export let age = null;
  export let favouriteColors = [];
  export let isAvailable = false;
</script>

<p>My name is {name}!</p>
<p>My age is {age}!</p>
<p>My favourite colors are {favouriteColors.join(", ")}!</p>
<p>I am {isAvailable ? "available" : "not available"}</p>
```

<MdH2Component :icon="fw_logo_map.solidJS" title="SolidJS" id="solidJS"/>
<Badge type="info" text="App.jsx" />
```jsx
import UserProfile from "./UserProfile.jsx";

export default function App() {
    return (
        <UserProfile
            name="John"
            age={20}
            favouriteColors={["green", "blue", "red"]}
            isAvailable
        />
    );
}
```
<Badge type="info" text="UserProfile.jsx" />
```jsx
import { mergeProps } from "solid-js";

export default function UserProfile(props) {
  const merged = mergeProps(
    { name: "", age: null, favouriteColors: [], isAvailable: false },
    props
  );

  return (
    <>
      <p>My name is {merged.name}!</p>
      <p>My age is {merged.age}!</p>
      <p>My favourite colors are {merged.favouriteColors.join(", ")}!</p>
      <p>I am {merged.isAvailable ? "available" : "not available"}</p>
    </>
  );
}
```

<MdH2Component :icon="fw_logo_map.qwik" title="Qwik" id="qwik"/>
<Badge type="info" text="App.tsx" />
```tsx
import { component$ } from "@builder.io/qwik";
import UserProfile from "./UserProfile";

const App = component$(() => {
    return (
        <UserProfile
            name="John"
            age={20}
            favouriteColors={["green", "blue", "red"]}
            isAvailable
        />
    );
});

export default App;
```
<Badge type="info" text="UserProfile.tsx" />
```tsx
import { component$ } from "@builder.io/qwik";

type Props = {
  name: string;
  age: number;
  favouriteColors: string[];
  isAvailable: boolean;
};

const UserProfile = component$((props: Props) => {
  const {
    name = "",
    age = null,
    favouriteColors = [],
    isAvailable = false,
  } = props;

  return (
    <>
      <p>My name is {name}!</p>
      <p>My age is {age}!</p>
      <p>My favourite colors are {favouriteColors.join(", ")}!</p>
      <p>I am {isAvailable ? "available" : "not available"}</p>
    </>
  );
});

export default UserProfile;
```

<MdH2Component :icon="fw_logo_map.angular" title="Angular" id="angular"/>
<Badge type="info" text="app.component.ts" />
```ts
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <app-userprofile
            name="John"
            [age]="20"
            [favouriteColors]="['green', 'blue', 'red']"
            [isAvailable]="true"
        >
        </app-userprofile>
    `,
})
export class AppComponent {}
```
<Badge type="info" text="userprofile.component.ts" />
```ts
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-userprofile",
  template: `
    <p>My name is {{ name }}!</p>
    <p>My age is {{ age }}!</p>
    <p>My favourite colors are {{ favouriteColors.join(", ") }}!</p>
    <p>I am {{ isAvailable ? "available" : "not available" }}</p>
  `,
})
export class UserprofileComponent {
  @Input() name: string = "";
  @Input() age: number = 0;
  @Input() favouriteColors: string[] = [];
  @Input() isAvailable: boolean = false;
}
```

<MdH2Component :icon="fw_logo_map.lit" title="Lit" id="lit"/>
<Badge type="info" text="x-app.js" />
```js
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./user-profile";

@customElement("x-app")
export class XApp extends LitElement {
    render() {
        return html`<user-profile
                name="John"
                age="20"
                .favouriteColors=${["green", "blue", "red"]}
                isavailable
               ></user-profile>`;
    }
}
```
<Badge type="info" text="user-profile.js" />
```js
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("user-profile")
export class UserProfile extends LitElement {
  @property()
  name = "";

  @property({ type: Number })
  age = null;

  @property({ type: Array })
  favouriteColors = [];

  @property({ type: Boolean })
  isAvailable = false;

  render() {
    return html`
      <p>My name is ${this.name}</p>
      <p>My age is ${this.age}</p>
      <p>My favourite coloros are ${this.favouriteColors.join(", ")}</p>
      <p>I am ${this.isAvailable ? "available" : "not available"}</p>
    `;
  }
}
```

<MdH2Component :icon="fw_logo_map.ember" title="Ember" id="ember"/>
<Badge type="info" text="app.hbs" />
```hbs
<UserProfile
  @name="John"
  @age={{20}}
  @favouriteColors={{array "green" "blue" "red"}}
  @isAvailable={{true}}
/>
```
<Badge type="info" text="user-profile.hbs" />
```hbs
<p>My name is {{@name}}!</p>
<p>My age is {{@age}}!</p>
<p>My favourite colors are {{this.formattedColors}}!</p>
<p>I am {{if @isAvailable "available" "not available"}}</p>
```
<Badge type="info" text="user-profile.js" />
```js
import Component from "@glimmer/component";

export default class UserProfile extends Component {
    get formattedColors() {
        return this.args.favouriteColors.join(", ");
    }
}
```

<MdH2Component :icon="fw_logo_map.alpine" title="Alpine" id="alpine"/>
<Badge type="info" text="index.html" />
```html
<!--Alpine JS suggests using a server-side templating engine or another frontend framework in conjunction with Alpine to do this-->

<div
  x-data="{
  name: 'John',
  age: 20,
  favouriteColors: ['green', 'blue', 'red'],
  isAvailable: true
}"
>
  <p>My name is <span x-text="John"></span></p>
  <p>My age is <span x-text="age"></span></p>
  <p>
    My favourite colors are <span x-text="favouriteColors.join(', ')"></span>
  </p>
  <p>I am <span x-text="isAvailable ? 'available' : 'not available'"></span></p>
</div>
```

<MdH2Component :icon="fw_logo_map.aurelia" title="Aurelia" id="aurelia"/>
<Badge type="info" text="app.html" />
```html
<template>
  <require from="./user-profile"></require>
  <user-profile
    name.bind="name"
    age.bind="age"
    favourite-colors.bind="colors"
    is-available.bind="available"
  ></user-profile>
</template>
```
<Badge type="info" text="app.ts" />
```ts
export class App {
  age = 20;
  name = "John";
  colors = ["green", "blue", "red"];
  available = false;
}
```
<Badge type="info" text="user-profile.html" />
```html
<template>
  <p>My name is ${name}</p>
  <p>My age is ${age}</p>
  <p>My favourite colors are ${favouriteColors.join(", ")}</p>
  <p>I am ${isAvailable ? "available" : "not available"}</p>
</template>
```
<Badge type="info" text="user-profile.ts" />
```ts
import { customElement, bindable } from "aurelia-templating";

@customElement("user-profile")
export class UserProfile {
    @bindable name = "";
    @bindable age = null;
    @bindable favouriteColors = [];
    @bindable isAvailable = true;
}
```