import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "@/assets/styles/tailwind.css";

createApp(App)
  .use(store)
  .mount("#app");

type Person = {
  name: string;
  age: number;
  0: number;
};

type Animal = {
  name: string;
  age: number;
  sound: string;
};

type ReadOnly<Type> = {
  readonly [i in keyof Type]: Type[i];
};

type ReadOnlyPerson = ReadOnly<Person>;

type PersonOrAnimal = Person & Animal;
