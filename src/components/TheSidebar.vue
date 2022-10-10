<template>
  <q-layout view="lHh lpR lFf">
    <q-drawer v-model="leftDrawerOpen" :breakpoint="0" class="text-white" :mini="minified" side="left">
      <div class="flex-wrapper">
        <slot name="sidebar"></slot>

        <div class="bottom-space">
          <div class="bottom-content bg-accent">
            <q-btn type="button" color="primary" @click="minified = !minified">Toggle State</q-btn>
          </div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page class="top-collapsing-margin-fix">
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";

const leftDrawerOpen = ref(true);
const minified = ref(false);
</script>

<style lang="scss" scoped>
.flex-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.bottom-space {
  display: flex;
  flex: 1;

  .bottom-content {
    padding: 1em;
    flex: 1;
    overflow: hidden;
  }
}

.top-collapsing-margin-fix {
  padding-top: 1px;
  margin-top: -1px;
}
</style>
