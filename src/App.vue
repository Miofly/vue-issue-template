<script lang="ts" setup>
  import { onMounted } from 'vue';
  import TestComp from '@/components/test-comp.vue';
	import { log } from './utils';
  import { NButton } from 'naive-ui';


  onMounted(() => {

  });
  log(11)
</script>

<template>
  <TestComp>
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
