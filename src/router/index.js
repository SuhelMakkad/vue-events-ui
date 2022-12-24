import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import AboutView from "@/views/AboutView.vue";
import EventDetails from "@/views/EventDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: EventList,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/event/:id",
    name: "event",
    props: true,
    component: EventDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: "/vue-events-ui/",
  routes,
});

export default router;
