
<template>
  <div  >
    <AuthHeader />
    <slot  />
    <AuthFooter />
  </div>
</template>



<script setup lang="ts">
import AuthFooter from '~/components/layouts/AuthFooter.vue';
import AuthHeader from '~/components/layouts/AuthHeader.vue';

</script>

