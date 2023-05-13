<template>
<component :is="tag" :to="to" v-bind="$attrs" class="link"><slot/></component>
</template>

<script>
export default {
  name: 'UiLink',
  inheritAttrs: false,
  props: {
    tag: {
      type: [String, Object, Function],
      required: false,
      default: 'router-link',
    },
    to: {
      type: [String, Object],
      required: false
    }
}}
</script>

<style scoped>
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
