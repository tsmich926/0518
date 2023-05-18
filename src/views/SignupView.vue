<template>
  <div class="usersignupbox">
      <form v-on:submit.prevent="signup">
        <h2>Create an account</h2>
        <input type="text" placeholder="UserName" v-model="credentials.username">
        <input type="password" placeholder="Password" v-model="credentials.password">
        <input type="submit" value="Sign up">
        <p>Already have an account?
          <a href="javascript:void(0);" @click="toggleForm">Sign in</a>
        </p>
      </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>