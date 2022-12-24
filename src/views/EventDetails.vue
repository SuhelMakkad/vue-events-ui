<template>
  <Suspense>
    <template #default>
      <div>
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
      </div>
    </template>
    
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import { ref } from "vue";

import EventService from "@/services/EventService";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  async setup(props) {
    const res = await EventService.getEvent(props.id);
    const event = ref(res.data);

    return { event };
  },
};
</script>

<style scoped></style>
