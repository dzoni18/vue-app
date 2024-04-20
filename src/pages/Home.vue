<template>
  <div class="home-wrapper">
    <!-- Show loader while the employees data is fetching -->
    <Loader v-if="loadingEmployeesData" />

    <!-- Show the employees list component when data is fetched -->
    <div class="main-content" v-if="!loadingEmployeesData">
      <Filters :options="filterOptions" :selectedFilter="selectedFilter" @changeFilter="changeFilter" />
      <EmployeesList v-if="filteredData" :employeesData="filteredData" @clickOnRow="clickOnRow" />
      <NoRecords :show="filteredData.length == 0 && !loadingEmployeesData" />
    </div>
  </div>
</template>

<script>
import EmployeesList from '@/components/EmployeesList.vue';
import { dataSource, filterOptions } from '@/utils/constants';
import Loader from '../components/Loader.vue';
import Filters from '@/components/Filters.vue';
import NoRecords from '../components/NoRecords.vue';

export default {
  name: 'Home-page',
  components: {
    EmployeesList,
    Loader,
    Filters,
    NoRecords
  },
  data() {
    return {
      employeesData: null, // Initialize employees data to null,
      loadingEmployeesData: true, // State for show/hide the loading indicator while data is fetching
      filterOptions: filterOptions,
      selectedFilter: filterOptions.all,
    };
  },
  methods: {
    async fetchData() {
      // Start the loading indicator
      this.loadingEmployeesData = true;

      try {
        // Fetch the data from the source
        const res = await fetch(dataSource)
        // Convert the data to readable json format
        const data = await res.json();
        // Save the data in the store
        this.employeesData = data;
      }

      catch (err) {
        // Log the error message
        console.log(err);
      }

      finally {
        // Stop the loading indicator
        this.loadingEmployeesData = false;
      }

    },
    changeFilter(newValue) {
      this.selectedFilter = newValue;
    },
    clickOnRow(employee) {
      this.$router.push({
        name: 'information-page',
        params: {
          employee
        }
      });
    }
  },
  mounted() {
    // Fetch data when the component is mounted
    this.fetchData();
  },
  computed: {
    filteredData() {
      let res = this.employeesData?.Employees || [];
      let currentDate = new Date();
      // Fix for today date
      currentDate.setHours(23);
      currentDate.setMinutes(59);

      if (this.selectedFilter === filterOptions.employedSoon) {
        // If EmploymentDate > currentDate
        res = res.filter((employee) => {
          const employmentDate = new Date(employee.EmploymentDate);
          return employmentDate.getTime() > currentDate.getTime()
        })
      }

      if (this.selectedFilter === filterOptions.currentlyEmployed) {
        // If EmploymentDate <= currentDate
        res = res.filter((employee) => {
          const employmentDate = new Date(employee.EmploymentDate);
          return employmentDate.getTime() <= currentDate.getTime()
        })
      }

      if (this.selectedFilter === filterOptions.toBeTerminated) {
        res = res.filter((employee) => {
          // If TerminationDate > currentDate
          const terminationDate = new Date(employee.TerminationDate);
          return terminationDate.getTime() > currentDate.getTime()
        })
      }

      if (this.selectedFilter === filterOptions.terminated) {
        res = res.filter((employee) => {
          // If TerminationDate <= currentDate
          const terminationDate = new Date(employee.TerminationDate);
          return terminationDate.getTime() <= currentDate.getTime()
        })

      }


      return res;
    }
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