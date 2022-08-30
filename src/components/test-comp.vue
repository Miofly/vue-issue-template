<script lang="ts" setup>
const [name] = /* hoist-static*/ ['VarCompName'];

defineOptions({
  name
});

const test = (name: string) => name
</script>

<template>
	<div>
    1
  </div>
</template>
