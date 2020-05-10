<template>
  <router-view/>
</template>

<style lang="scss">
@import '@/assets/scss/vars.scss';

html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  background-color: $primary;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $contrast;
}
</style>
