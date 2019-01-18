import * as tsx from "vue-tsx-support";
import { VNode } from "vue";
import { Counter } from "./components/Counter";

// Styles
import "./main.css";

const App = tsx.component({
  name: "App",

  data() {
    return {
      addValue: 10
    };
  },

  methods: {
    addTime(): void {
      this.$store.commit("timeCounter/ADD_TIME", this.addValue);
    }
  },

  render(): VNode {
    return (
      <div class="wrapper">
        <Counter interval={1000}>
          <div slot="controller">
            <button type="button" onClick={() => this.addTime()}>
              ADD TIME
            </button>
          </div>
        </Counter>
      </div>
    );
  }
});

export { App };
