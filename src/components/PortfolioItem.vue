<template>
  <v-card :href="link" flat color="transparent" class="my-8 pr-1">
    <v-row>
      <v-col
        cols="12"
        lg="2"
        md="3"
        sm="4"
        class="pa-0 pr-2 d-flex justify-center"
      >
        <v-img
          class="rounded"
          aspect-ratio="1"
          max-width="300"
          min-width="150"
          min-height="150"
          :src="`${image || 'https://picsum.photos/500/300?image=20'}`"
        ></v-img
      ></v-col>

      <v-col
        class="portfolio-text-box pa-2 d-flex flex-column justify-end"
        cols="12"
        lg="10"
        md="9"
        sm="8"
      >
        <v-card-title class="text-h4 px-0 py-0">{{
          title || 'Lorem Ipsum'
        }}</v-card-title>
        <v-card-subtitle class="px-0 py-0 mt-1 mb-0">{{
          time
        }}</v-card-subtitle>
        <v-spacer></v-spacer>
        <v-card-text class="text-body-2 px-0 py-1">
          <slot>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </slot>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: 'Present'
    }
  }
}
</script>

<style lang="scss">
.portfolio-text-box {
  border-radius: 0 !important;
  border-bottom: 1px solid #f44336;
}
</style>
