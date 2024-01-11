import { createStore } from 'vuex';

export const store = createStore({
  state: {
    loadedMeetups: [
      {
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        id: "11",
        title: "Meet IN UK",
        date: '2023-11-17',
        description:'frdfg'
      },
      {
        imageUrl: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        id: "2",
        title: "Meet IN LONDON",
        date: '2023-11-19',
        description:'frdfg'
      },
    ],
    user: {
      id: 'vivek',
      registeredMeetups: ['vivek']
    }
  },
  mutations: {
    createMeetUp(state,payload){
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetUp({commit},payload){
       const meetup={
        title:payload.title,
        location:payload.location,
        imageUrl:payload.imageUrl,
        description:payload.description,
        date:payload.date
       }
       commit('createMeetUp',meetup)
    }
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
