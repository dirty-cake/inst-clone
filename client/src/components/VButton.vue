<template>
  <div class="container">
    <button class="button"><slot/></button>
  </div>
</template>

<script>
export default {
  name: 'VButton'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.container {
  width: 100%;
}
.button {
  background-color: $action;
  border: none;
  border-radius: 4px;
  color: $contrast;
  padding: 10px;
  width: 100%;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: background .3s ease-in-out;

  &:hover {
    background-color: lighten($action, 5%);
  }
}
</style>
