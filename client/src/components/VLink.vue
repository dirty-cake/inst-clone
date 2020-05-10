<template>
  <span class="link">
    <slot/>
  </span>
</template>

<script>
export default {
  name: 'VLink'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.link > * {
  color: $action;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: color .3s ease-in-out;

  &:hover {
    color: lighten($action, 5%);
  }
}
</style>