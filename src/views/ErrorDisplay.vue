<template>
  <h4>Something went wrong!</h4>
  <p>{{ error }}</p>
</template>

<script setup>
defineProps({
  error: {
    type: String,
    required: true,
  },
});
</script>
