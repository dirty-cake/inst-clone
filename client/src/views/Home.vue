<template>
  <div class="page_login">
    <div class="login_container">
      <img src="@/assets/images/logo.svg" class="logo">
      <div class="login_form">
        <VInput v-model="username" type="text" placeholder="Username"/>
        <VInput v-model="password" type="password" placeholder="Password"/>
        <VButton @click="login">Login</VButton>
      </div>
    </div>
    <div class="registration_container">
      <span>Don't you have an account? </span>
      <VLink>
        <router-link to="/registration">Sign up</router-link>
      </VLink>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'Home',
  setup() {
    const username = ref('')
    const password = ref('')
    const login = () => {
      console.log(username, password)
    }
    return {
      username,
      password,
      login
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.page_login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.login_container, .registration_container {
  box-sizing: border-box;
  background-color: lighten($primary, 7%);
  width: 400px;
  border-radius: 4px;
}
.login_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 40px 40px;
}
.registration_container {
  padding: 20px;
}
.logo {
  width: 250px;
  margin-bottom: 10px;
}
.login_form {
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
}

</style>
