<template>
  <div>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

import { getEvent } from "@/services/EventService";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const res = getEvent(props.id);
    const event = ref(res);

    return { event };
  },
};
</script>

<style scoped></style>
