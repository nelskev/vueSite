<template>
  <navBar />
  <div class="page-wrap">
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue'

export default {
  name: 'App',
  components: {
    navBar,
  },
}
</script>

