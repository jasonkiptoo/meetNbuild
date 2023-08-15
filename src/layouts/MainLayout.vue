
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar style="background-color: #FFA500;  color: #000;"  size="xl" >

               M&B
          </q-avatar>
           MEET&BUILD

        </q-toolbar-title>




        <q-tabs
          color="orange"
          active-color="orange"
          indicator-color="orange"

        >






          <q-tab name="home" icon="home" label="Home">

          </q-tab>

          <q-tab name="services" icon="settings" label="Services">

          </q-tab>
          <q-tab icon="info" label="About">

          </q-tab>
          <q-tab label="portfolio" icon="work">

          </q-tab>
          <q-tab label="members" icon="people">

          </q-tab>
          <q-tab icon="email" label="Contact">
          </q-tab>
    </q-tabs>

      </q-toolbar>
    </q-header>





 <!-- <q-page-container style="background-color: #197BD5;">

<q-btn color="red">

</q-btn>


      <q-page>
        <q-tabs
          color="orange"
          active-color="positive"
          indicator-color="orange"
          align="justify"
        >






          <q-tab name="home" icon="home" label="Home">

          </q-tab>

          <q-tab name="services" icon="settings" label="Services">

          </q-tab>
          <q-tab icon="info" label="About">

          </q-tab>
          <q-tab label="portfolio" icon="work">

          </q-tab>
          <q-tab label="members" icon="people">

          </q-tab>
          <q-tab icon="email" label="Contact">
          </q-tab>
        </q-tabs>
      </q-page>
    </q-page-container> -->

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
