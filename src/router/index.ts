// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path:'/meetup',
        name:'MeetUps',
        component:() => import('@/components/MeetUp/MeetUps.vue')
      },
      {
        path:'/newmeetup',
        name:'CreateMeetUp',
        component:() => import('@/components/MeetUp/CreateMeetUp.vue')
      },
      {
        path:'/profile',
        name:'Profile',
        component:() => import('@/components/User/Profile.vue')
      },
      {
        path:'/signin',
        name:'Signin',
        component:() => import('@/components/User/Signin.vue')
      },
      {
        path:'/signup',
        name:'Signup',
        component:() => import('@/components/MeetUp/Signup.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
