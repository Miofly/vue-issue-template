<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
	import { log } from './utils';

  onMounted(() => {

  });
  let test = ref();
  log(11)
</script>

<template>
  <TestComp test="test" name="name" class-name="ddd">
    <template #title>
    	111
    </template>
  </TestComp>

  <button
  style="animation: wf-rotate 2s linear infinite">11</button>

  <n-button color="#8a2be2">
    <template #icon>
      111
    </template>
    #8a2be2
  </n-button>
</template>
