<template>
  <v-app>
    <app-bar />
    <v-main>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'

export default {
  name: 'App',

  components: {
    AppBar
  },

  data: () => ({
    //
  })
}
</script>
