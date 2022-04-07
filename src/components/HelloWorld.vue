<template>
  <div class="container">
    <new-design v-if="showNewDesign" />
    <term v-else-if="term" />
    <old-design v-else />
  </div>
</template>

<script>
import OldDesign from "./OldDesign.vue";
import NewDesign from "./newDesign.vue";
import Term from "./Term.vue";
import { UnleashClient } from "unleash-proxy-client";

export default {
  components: {
    OldDesign,
    NewDesign,
    // eslint-disable-next-line
    Term,
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  component: {
    OldDesign,
  },
  data() {
    return {
      showNewDesign: false,
      term: false,
    };
  },
  methods: {
    checkFlag: async () => {
      const unleash = new UnleashClient({
        url: "http://localhost:3000/proxy",
        clientKey: "some-secret",
        refreshInterval: 2,
        appName: "demo-unleash",
        environment: "dev",
      });
      unleash.updateContext({ userId: 2029 });
      await unleash.start().then(() => {
        return unleash.getAllToggles();
      });

      return unleash.getAllToggles();
    },
  },

  mounted() {
    this.checkFlag().then((response) => {
      console.log(response)
      if (response[0].name == "new-design") {
        this.showNewDesign = true;
        this.term = false;
      }
      if (response[0].name == "terminator"){
        this.term = true;
        this.showNewDesign = false;

      } 
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
