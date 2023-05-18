<template>
  <div>
    <div class="userloginbox">
      <form v-on:submit.prevent="login">
        <input type="text" placeholder="userName" v-model="username" required>
        <input type="password" placeholder="userPassWord" v-model="password" required>
        <input type="submit" value="Login">
        <p class="signup">don't have an account?
          <a href="javascript:void(0);" @click="toggleForm">Sign up</a>
        </p>
      </form>
    </div>

  </div>
</template>


<script>
// import {mapActios, mapGetters} from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: '',
      credentials: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    login(event) {
      event.preventDefault()
      const loginITem = {
        username : this.credentials.username,
        password : this.credentials.password
      }
      if (_.trim(this.credentials.username)){
        axios({
          methods:'post',
          // url: `${}`
        })
      }
    },
    signup() {
      // Implement your signup logic here
    },
    toggleForm() {
      // Implement the logic to toggle between login and signup forms here
    }
  }
};
</script>

<style>
/* .userloginbox {

} */
</style>
