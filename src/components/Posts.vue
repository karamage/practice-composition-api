<template>
  <div>Posts</div>
</template>

<script lang="ts">
import { defineComponent, /*ref*/ } from "@vue/composition-api"
/*
import useArrayPagination from '@/composables/use-array-pagination'
import usePromiseFn from '@/composables/use-promise'
import * as api from '../api'
*/

import Post from '@/components/Post.vue'
import Pagination from '@/components/Pagination.vue'

export default defineComponent({
  name: 'ShowPosts',
  components: {
    Post,
    Pagination,
  },
  setup() {
    return {
    }
  }
})

</script>

<style lang="scss" scoped>
</style>