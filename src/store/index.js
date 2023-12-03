import { createStore } from 'vuex';

export const store = createStore({
  state: {
    loadedMeetups: [
      {
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        id: "1",
        title: "Meet IN UK",
        date: '2023-11-17'
      },
      {
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: "2",
        title: "Meet IN LONDON",
        date: '2023-11-19'
      },
    ],
    user: {
      id: 'vivek',
      registeredMeetups: ['vivek']
    }
  },
  mutations: {
    // Add mutations if needed
  },
  actions: {
    // Add actions if needed
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetA, meetB) => {
        return meetA.date > meetB.date
      });
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id == meetupId;
        });
      };
    },
    featuredMeetUps(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    }
  }
});
