<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" style="cursor:pointer"></router-link>
        DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      sideNav: false,
      menuItems: [
        {
          icon: "mdi-account-multiple",
          title: "View Meetups",
          link: "/meetup",
        },
        {
          icon: "mdi-map-marker",
          title: "Organize Meetup",
          link: "/newmeetup",
        },
        { icon: "mdi-account", title: "Profile", link: "/profile" },
        { icon: "mdi-logout", title: "Sign Up", link: "/signup" },
        { icon: "mdi-login", title: "Sign in", link: "/signin" },
      ],
    };
  },
};
</script>
