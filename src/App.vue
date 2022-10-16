<template>
  <v-app>
    <v-system-bar

      color="primary"
      dark
      height="100px"
      app
    >
      <v-spacer />
    </v-system-bar>
    <v-navigation-drawer
      color="secondary"
      app
      permanent
      dark
      :src="require('@/assets/sidebar.jpg')"
    >
      <!-- v-slot:img = #img -->
      <template
        #img="props"
      >
        <v-img
          :gradient="gradient"
          v-bind="props"
        />
      </template>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          active-class="primary"
          class="py-1"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container
        fluid
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/'},
      { title: 'Grid System', icon: 'mdi-image', to: '/grid-system'},
      { title: 'Grid List Page', icon: 'mdi-image', to: '/grid-list-page'},
      { title: 'Break Points', icon: 'mdi-image', to: '/break-points'},
      { title: 'Typography', icon: 'mdi-image', to: '/typography'},
      { title: 'Tables', icon: 'mdi-table-settings', to: '/tables'},
      { title: 'Forms', icon: 'mdi-form-select', to: '/forms'},
      { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons'},
      { title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: '/icons'},
    ],
    listitems: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', color: '#ff00ff', val: true},
      { title: 'Photos', icon: 'mdi-image', color: '#12ff12', val: true },
      { title: 'About', icon: 'mdi-help-box', color: '#feff0f', val: false },
    ],
    right: null,
    gradient: 'rgba(0,0,0,.7), rgba(0,0,0,.7)',
  }),
};
</script>


<style>



</style>
