<template>
  <div class="home-wrapper">
    <!-- Show loader while the employees data is fetching -->
    <Loader v-if="loadingEmployeesData" />
    <!-- Show the employees list component when data is fetched -->
    <div class="main-content" v-if="!loadingEmployeesData">
      <Filters :options="filterOptions" />
      <EmployeesList :employeesData="employeesData.Employees" />
    </div>
  </div>
</template>

<script>
import EmployeesList from '@/components/EmployeesList.vue';
import { dataSource, filterOptions } from '@/utils/constants';
import Loader from '../components/Loader.vue';
import Filters from '@/components/Filters.vue';

export default {
  name: 'Home-page',
  components: {
    EmployeesList,
    Loader,
    Filters
  },
  data() {
    return {
      employeesData: null, // Initialize employees data to null,
      loadingEmployeesData: true, // State for show/hide the loading indicator while data is fetching
      filterOptions: filterOptions,
    };
  },
  methods: {
    async fetchData() {
      // Start the loading indicator
      this.loadingEmployeesData = true;
      // Fetch the data from the source
      const res = await fetch(dataSource)
      // Convert the data to readable json format
      const data = await res.json();
      // Save the data in the store
      this.employeesData = data;
      // Stop the loading indicator
      this.loadingEmployeesData = false;
    }
  },
  mounted() {
    // Fetch data when the component is mounted
    this.fetchData();
  }
}
</script>

<style>
.home-wrapper {
  widows: 100%;
  height: 100%
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>