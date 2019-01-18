import * as tsx from "vue-tsx-support";
import { VNode } from "vue";
import { IState } from "@/store";

// Styles
import "./counter.css";

const Counter = tsx.component({
  name: "Counter",

  props: {
    interval: {
      type: Number,
      required: false,
      default: () => {
        return 1000;
      }
    }
  },

  created() {
    setInterval(() => {
      this.$store.commit("timeCounter/MIN_TIME", this.factor);
    }, this.interval);
  },

  data() {
    return {
      factor: 1
    };
  },

  computed: {
    counter(): number {
      return (this.$store.state as IState).timeCounter.fromTime;
    }
  },

  render(): VNode {
    return (
      <div class="counter">
        <span>{this.counter}</span>
        <div class="controller">{this.$slots.controller}</div>
      </div>
    );
  }
});

export { Counter };
