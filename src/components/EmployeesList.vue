<template>
  <div tabindex="-1" class="table-container">
    <div class="results-count">
      <span>
        Shown records:
      </span>

      <span class="results-number">
        {{ employeesData.length }}
      </span>
    </div>
    <table tabindex="-1" class="responsive-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee) in employeesData" :key="employee.Id" @click="$emit('clickOnRow', employee)">
          <td>{{ employee.Id }}</td>
          <td>{{ employee.FirstName }}</td>
          <td>{{ employee.LastName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'EmployeeList',
  props: {
    employeesData: {
      type: Array,
      required: true
    },
  },
  emits: ['clickOnRow']
}
</script>

<style scoped>
.table-container {
  max-width: 100%;
  position: relative;
}

.results-count {
  text-align: left;
  color: gray;
  margin-bottom: 8px;
  opacity: 0.7;
}

.results-number {
  font-weight: 500;
  color: rgb(2, 149, 189);
}

.responsive-table thead {
  position: sticky !important;
  top: 0;
  z-index: 1;
}


.responsive-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.responsive-table th,
.responsive-table td {
  padding: 8px;
  text-align: left;
  text-align: left;
  white-space: nowrap;
}

.responsive-table th {
  background-color: #bde7f1;
  color: rgb(93, 92, 92);
}

.responsive-table tr {
  cursor: pointer;
}


.responsive-table tbody tr:nth-child(odd) {
  background-color: #7071710b;
  /* Background color for odd rows */
}

.responsive-table tbody tr:hover {
  background-color: #76b5de3f;
  /* Background color on hover */
  transition: background-color x0.1s ease-in-out;
  /* Smooth transition */
}
</style>
