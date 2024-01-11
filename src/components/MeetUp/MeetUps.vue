<template>
  <v-col cols="12">
    <div v-for="meet in meetups" :key="meet.id" class="meetup-card">
      <v-card color="#1F7087" theme="dark" class="my-4"> <!-- Add margin-bottom to v-card -->
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5">{{ meet.title }}</v-card-title>
            <v-card-subtitle>{{ meet.date }}</v-card-subtitle>

            <v-card-actions>
              <v-btn flat :to="`/meetups/${meet.id}`">
                <v-icon left light color="red">arrow_forward</v-icon>
                View Meetup
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img :src="meet.imageUrl"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </div>
  </v-col>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    },
  },
};
</script>

<style scoped>
.meetup-card {
  /* Add any additional styling if needed */
}
</style>
