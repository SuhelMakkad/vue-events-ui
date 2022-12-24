<template>
  <router-link class="event-link" :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div class="event-card">
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",

  props: {
    event: Object,
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 18px;
  width: 250px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #576a82;
  transition-property: transform, box-shadow;
  transition: 200ms ease;
  cursor: pointer;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.1);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
