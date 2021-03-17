<template>
  <div class="login">
    <Banner msg="Spend Bill Gates' Money" />
    <div>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input type="text" name="username" v-model="username" />
          <div v-show="submitted && !username" class="error">
            Username is required
          </div>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="password" />
          <div v-show="submitted && !username" class="error">
            Password is required
          </div>
        </div>
        <Button type="submit" class="right"> Login </Button>
        <p v-if="alert.message" class="error">
          Username or Password is incorrect
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Banner,
  },
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
  computed: {
    ...mapState({
      account: (state) => state.status,
      alert: (state) => state.alert,
    }),
  },
  created() {
    this.logout();
  },
  methods: {
    ...mapActions({
      login: "account/login",
      logout: "account/logout",
      clearAlert: "alert/clear",
    }),
    handleLogin() {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password });
      }
    },
  },
  watch: {
    $route() {
      this.clearAlert();
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
