<template>
  <div class="container">
    <input class="input" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'VInput',
  props: {
    placeholder: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.container {
  width: 100%;
}
.input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: $primary;
  border: 1px solid darken($primary, 20%);
  border-radius: 4px;
  color: $contrast;
  outline: none;
  transition: border .3s ease-in-out;

  &:focus {
    border-color: $action;
  }
}
</style>