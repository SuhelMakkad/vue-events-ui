<template>
  <h1>Create an event</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label>Select a category: </label>
      <select v-model="event.category" required>
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >
          {{ option }}
        </option>
      </select>

      <h3>Name & describe your event</h3>

      <label>Title</label>
      <input v-model="event.title" type="text" placeholder="Title" required />

      <label>Description</label>
      <input v-model="event.description" type="text" placeholder="Description" required />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <input v-model="event.location" type="text" placeholder="Location" required />

      <h3>When is your event?</h3>
      <label>Date</label>
      <input v-model="event.date" type="text" placeholder="Date" required />

      <label>Time</label>
      <input v-model="event.time" type="text" placeholder="Time" required />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

import { v4 as uuid } from "uuid";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const categories = [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ];

    const event = ref({});

    const onSubmit = async () => {
      const newEvent = {
        ...event.value,
        id: uuid(),
        organizer: store.state.user,
      };

      await store.dispatch("createEvent", newEvent);
      router.push({
        name: "EventDetails",
        params: {
          id: newEvent.id,
        },
      });
    };

    return {
      categories,
      event,
      onSubmit,
    };
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
}
</style>
