<template>
  <div class="container">
    <new-design v-if="showNewDesign" />
    <old-design v-else />
  </div>
</template>

<script>
import OldDesign from "./OldDesign.vue";
import NewDesign from "./newDesign.vue";
import { UnleashClient } from "unleash-proxy-client";

export default {
  components: { OldDesign, NewDesign },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  component: {
    OldDesign,
    NewDesign,
  },
  data() {
    return {
      showNewDesign: true,
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
      unleash.updateContext({ userId: 2 });
      await unleash.start().then(() => {
        return unleash.getAllToggles();
      });

      return unleash.isEnabled("new-design");
    },
  },

  mounted() {
    this.checkFlag().then((response) => {
      this.showNewDesign = response;
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
