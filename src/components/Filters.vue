<template>
  <div class="filter-container">
    <div class="filter-label">Filters</div>
    <select class="filter-select" @change="$emit('filterChange', $event.target.value)">
      <option value="">All</option>
      <option v-for="option in Object.keys(options)" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>


<script>

export default {
  name: 'filters-component',
  props: {
    options: {
      type: Object,
      required: true
    }
  },

  emits: ['filterChange']
}
</script>

<style scoped>
/* Container styles */
.filter-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3px;
}

/* Filter label */
.filter-label {
  font-size: 13px;
  font-weight: bold;
  color: #33333370;
}

/* Filter select dropdown */
.filter-select {
  width: min(100%, 400px);
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #555;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.filter-select:focus {
  outline: none;
  border-color: #4c98af;
  box-shadow: 0 0 5px rgba(76, 150, 175, 0.5);
}

/* Filtered data list */
.filtered-data {
  list-style: none;
  padding: 0;
}

.filtered-data li {
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
}

/* Hover effect on filtered data */
.filtered-data li:hover {
  cursor: pointer;
  color: #4CAF50;
}

/* Odd rows background color */
.filtered-data li:nth-child(odd) {
  background-color: #f9f9f9;
}
</style>
