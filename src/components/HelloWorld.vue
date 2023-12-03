<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="d-flex justify-center justify-sm-end mb-4">
        <v-btn large router to="/meetups" class="info bg-primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="d-flex justify-center mb-4">
        <v-btn large router to="/meetup/new" class="info bg-primary"
          >Organize Meetup</v-btn
        >
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-carousel>
        <v-carousel-item
          v-for="meetup in meetups"
          :key="meetup.id"
          :src="meetup.imageUrl"
          cover
          @click="onLoadClick(meetup.id)"
        >
        <div class="title">
          {{meetup.title}}
        </div>
        </v-carousel-item>
      </v-carousel>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed:{
    meetups(){
      return this.$store.getters.featuredMeetUps;
    }
  },
  data() {
    return {
    };
  },
  methods:{
    onLoadClick(id){
       this.$router.push('/meetups'+ `/${id}`)
    }
  }
};
</script>
