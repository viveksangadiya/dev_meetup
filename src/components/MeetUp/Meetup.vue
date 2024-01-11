<template>
  <v-card class="mx-auto mt-4" max-width="800">
	<v-card-title>
      {{ meetup.title }}
    </v-card-title>
    <v-img :src="meetup.imageUrl" height="300px" cover></v-img>

    <v-card-subtitle class="mt-4">
    Date : {{ meetup.date }}
    </v-card-subtitle>

    <v-expand-transition class="mt-4">
      <div>
        <v-divider></v-divider>
        <v-card-text>
          {{ meetup.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
	<v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="mt-2 info bg-primary" @click="register">Register</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    },
  },
};
</script>