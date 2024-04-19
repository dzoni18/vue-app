<template>
  <div>
    <div>
      Vue app by Nikola
    </div>
    <EmployeesList />
  </div>
</template>

<script>
import EmployeesList from '@/components/EmployeesList.vue';
import { dataSource } from '@/utils/constants';

export default {
  name: 'Home-page',
  components: { EmployeesList },
  data() {
    return {
      employeesData: null, // Initialize employees data to null,
      loadingEmployeesData: true, // State for show/hide the loading indicator while data is fetching
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
      this.loadingEmployeesData = true;
    }
  },
  mounted() {
    // Fetch data when the component is mounted
    this.fetchData();
  }
}
</script>

<style></style>