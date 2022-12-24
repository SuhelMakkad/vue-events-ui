<template>
  <h1>Events for Good</h1>

  <div v-if="events" class="events">
    <EventCard v-for="event in events" :key="event?.id" :event="event" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",

  components: {
    EventCard,
  },

  setup() {
    const store = useStore();
    const events = computed(() => store.state.events);

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
