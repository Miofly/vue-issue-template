<script lang="ts" setup>
  interface Props {
    /** name */
    name?: string;
    /** test */
    test?: string;
  }

  // const { name } = defineProps<Props>();

  defineProps<Props>();
</script>

<template>
  <div :class="className">
    {{ name }}
    {{ test }}
  </div>
  <slot name="title"></slot>
</template>

