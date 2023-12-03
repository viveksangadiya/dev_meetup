<template>
<v-col cols="12">
          <v-card
            color="#1F7087"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  My Meetup
                </v-card-title>

                <v-card-subtitle>17th July 2017</v-card-subtitle>

                 <v-card-actions>
                  <v-btn flat to="/meetups/:id">
                    <v-icon left light color="red">arrow_forward</v-icon>
                    View Meetup
                  </v-btn>
                 </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
</template>