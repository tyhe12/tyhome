<template>
  <v-app-bar hide-on-scroll elevate-on-scroll dense app color="secondary" dark>
    <div class="d-flex align-center">
      <!-- <v-img
        alt="Logo"
        class="shrink mr-2"
        contain
        transition="scale-transition"
        width="40"
      /> -->

      <v-btn
        active-class="no-active"
        exact
        depressed
        text
        to="/"
        class="text-h6 text-center text-uppercase"
      >
        Tianyi He
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      active-class="no-active"
      text
      class="hidden-sm-and-down mr-1"
      :to="{ name: 'Home', hash: '#section--about' }"
    >
      <span>About</span>
    </v-btn>

    <v-btn
      active-class="no-active"
      text
      class="hidden-sm-and-down mr-1"
      :to="{ name: 'Home', hash: '#section--portfolio' }"
    >
      <span>Portfolio</span>
    </v-btn>

    <v-btn
      active-class="no-active"
      text
      class="hidden-sm-and-down"
      :to="{ name: 'Home', hash: '#section--contact' }"
    >
      <span>Contact</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({})
}
</script>

<style lang="scss">
.no-active::before {
  opacity: 0 !important;
}
</style>
