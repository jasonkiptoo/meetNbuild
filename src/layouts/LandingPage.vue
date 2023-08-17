<template>
  <q-layout class="container" view="hHh lpR fFf">
    <q-header elevated class="bg-black text-white q-pt-md">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar style="background-color: #ffa500; color: #000" size="xl">
            M&B
          </q-avatar>
          MEET&BUILD
        </q-toolbar-title>

        <q-tabs
          color="orange"
          active-color="orange"
          indicator-color="orange"
          inline-label
          v-model="activeTab"
          @click="changeTab"
        >
          <q-tab name="home" icon="home" label="Home"> </q-tab>
          <q-tab name="services" icon="settings" label="Services"> </q-tab>
          <q-tab name="aboutus" icon="info" label="About us"> </q-tab>
          <q-tab name="portfolio" label="portfolio" icon="work"> </q-tab>
          <q-tab name="members" label="members" icon="people"> </q-tab>
          <q-tab name="contact" icon="phone" label="Contact"> </q-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LandingPage",

  components: {},

  setup() {
    // const activeTab = ref("home");
    // const leftDrawerOpen = ref(false);

    return {
      activeTab: "home",

      // leftDrawerOpen,
      // toggleLeftDrawer() {
      //   leftDrawerOpen.value = !leftDrawerOpen.value;
      // },
    };
  },

  methods: {
    changeTab() {
      // console.log("jidwehbwci", this.activeTab);
      this.$router.push({ path: this.activeTab });
    },
  },
});
</script>

<style scoped>
.container {
  background-color: #197bd5;
}
</style>
