<template>
  <div class="container">
    <new-design v-if="showNewDesign" />
    <old-design v-else />
  </div>
</template>

<script>
import OldDesign from "./OldDesign.vue";
import NewDesign from "./newDesign.vue";
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
