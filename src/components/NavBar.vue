<template>
  <div id="navbar">
    <span id="logout">
      <router-link to="/login" style="text-decoration: none; color: inherit;"
        ><b>Logout </b></router-link
      >
    </span>
  </div>
</template>

<script>

export default {
  name: "NavBar"
};
</script>
<style scoped>
#navbar {
  display: flex;
  justify-content: flex-end;
}
</style>
