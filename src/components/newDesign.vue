<template>
  <div class="container justify-content-center align-items-center">
    <img id="img" class="image" src="@/assets/tech.jpg" />
    <p-card class="card flex flex-column align-items-center w-3 h-27rem">
      <template #title> new design Unleash-demo </template>
      <template #content>
        <toast />
        <div class="field flex flex-column">
          <label class="align-self-start" for="username1">Username</label>
          <input-text
            id="username1"
            type="username"
            aria-describedby="username1-help"
            class="w-15"
          />

          <small class="align-self-start" id="username1-help"
            >Enter your username.</small
          >
        </div>
        <div class="field flex flex-column">
          <label class="align-self-start" for="pass">password</label>
          <pass-word
            id="pass"
            type="username"
            aria-describedby="pass-help"
            v-model="pass"
            class="bar"
            toggleMask
          ></pass-word>
          <small class="align-self-start" id="pass-help"
            >Enter your password.</small
          >
        </div>
        <div class="flex mb-3">
          <p-button
            @click="showdanger"
            class="mr-2 p-button-info"
            label="Forgot my passord"
          />
          <p-button @click="showSuccess" label="Log in" />
        </div>
        <p-button
          class="align-self-start flex"
          label="Login using Google services"
          icon="pi pi-google"
          @click="showInfo"
        />
      </template>
    </p-card>
  </div>
</template>

<script>
export default {
  name: "NewDesign",
  data() {
    return {
      pass: "",
    };
  },
  methods: {
    showSuccess() {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Log in completed",
        life: 3000,
      });
    },
    showdanger() {
      this.$toast.add({
        severity: "error",
        summary: "Forget my password",
        detail: "This functionality is not implemented",
        life: 3000,
      });
    },
    showInfo() {
      this.$toast.add({
        severity: "info",
        summary: "Info Message",
        detail: "Google services are not available",
        life: 3000,
      });
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  margin-top: 30vh;
  height: 100%;
  opacity: 0.95;
}

.bar {
  width: 220px;
}
.card:hover {
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
  opacity: 1;
}

.container {
  display: flex;
  flex-direction: column;
}
.image {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100vw;
  max-height: 100vh;
}
body {
}
</style>
