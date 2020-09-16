<template>
  <v-hover v-slot:default="{ hover }">
    <v-card hover class="d-flex mb-4">
      <div class="pb-2 d-flex flex-column justify-space-between">
        <v-card-title class="text-h4">
          <slot name="title">University of Southern California</slot>
        </v-card-title>
        <v-card-subtitle>
          <slot name="subtitle">
            Computer Science - 2019-2021(Expected)
          </slot>
        </v-card-subtitle>

        <v-expand-transition>
          <div v-if="hover" class="d-flex">
            <v-card-text>
              <slot>
                <h5 class="text-h6">Courses &amp; Interests</h5>
                <ul>
                  <li class="text-body-2">
                    Algorithm Design &amp; Analysis
                  </li>
                  <li class="text-body-2">Web Technology</li>
                  <li class="text-body-2">
                    Computer Graphics &amp; Rendering
                  </li>
                  <li class="text-body-2">Game Engine Development</li>
                </ul>
              </slot>
            </v-card-text>
          </div>
        </v-expand-transition>
      </div>
    </v-card>
  </v-hover>
</template>
