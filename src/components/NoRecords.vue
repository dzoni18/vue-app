<template>
  <div class="not-records-wrapper" v-if="show">{{ dataNotFoundMessage }}</div>
</template>

<script>
import { dataNotFoundMessage } from '@/utils/constants';

export default {
  name: 'no-records-components',
  props: {
    show: {
      type: Boolean,
    }
  },
  data() {
    return {
      dataNotFoundMessage: dataNotFoundMessage
    }
  }
}
</script>

<style>
.not-records-wrapper {
  color: rgba(136, 136, 136, 0.57);
  font-weight: 500;
}
</style>