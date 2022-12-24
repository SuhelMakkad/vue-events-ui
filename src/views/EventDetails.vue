<template>
  <div>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import {  useStore} from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const store = useStore()
    store.dispatch("fetchEvent", props.id);

    const event = computed(() => store.state.event)

    return { event };
  },
};
</script>

<style scoped></style>
