<script lang="ts" setup>
  import { onMounted } from 'vue';
	import { log } from './utils';

  onMounted(() => {

  });
  log(11)
</script>

<template>
  <TestComp test="test" name="name" class-name="ddd">
    <template #title>
    	111
    </template>
  </TestComp>

  <n-button color="#8a2be2">
    <template #icon>
      111
    </template>
    #8a2be2
  </n-button>
</template>
