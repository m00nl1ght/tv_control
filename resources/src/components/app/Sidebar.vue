<template>
    <v-navigation-drawer app clipped v-model="drawen">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.url"
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
</template>

<script>
  export default {
    data () {
      return {
        drawen: null,
        items: [
          { title: 'Home', url: "/", icon: 'mdi-image' },
          { title: 'Dashboard', url: "/dashboard", icon: 'mdi-view-dashboard' },
          { title: 'New act', url: "/main", icon: 'mdi-image' },
        ],
        right: null,
      }
    },
  }
</script>