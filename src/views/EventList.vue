<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import { ref } from "vue";

import EventService from "@/services/EventService";

import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",

  components: {
    EventCard,
  },

  async setup() {
    const res = await EventService.getEvents();
    const events = ref(res.data);

    return { events };
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
