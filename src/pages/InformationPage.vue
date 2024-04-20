<template>
  <div>
    <div class="back-button" @click="onBack"> {{ '&#x25c0;' }} back</div>
    <div v-if="!employee">
      Employee not found
    </div>
    <div v-else>
      <div class="employee-info">
        <h1>Employee Information</h1>
        <div class="field">
          <label>ID:</label>
          <span>{{ employee.Id }}</span>
        </div>
        <div class="field">
          <label>First Name:</label>
          <span>{{ employee.FirstName }}</span>
        </div>
        <div class="field">
          <label>Last Name:</label>
          <span>{{ employee.LastName }}</span>
        </div>
        <div class="field">
          <label>Gender:</label>
          <span>{{ employee.Gender }}</span>
        </div>
        <div class="field">
          <label>Occupation:</label>
          <span>{{ employee.Occupation }}</span>
        </div>
        <div class="field">
          <label>Date of Birth:</label>
          <span>{{ formatDate(employee.DateOfBirth) }}</span>
        </div>
        <div class="field-input">
          <label>Employment Date:</label>
          <input type="date" />
        </div>
        <div class="field-input">
          <label>Termination Date:</label>
          <input type="date" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'information-page',
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    onBack() {
      this.$router.push({
        name: 'home-page',

      });
    }
  },
  computed: {
    employee() {
      // Access the employee object from the route parameters
      return this.$route.params.employee;
    }
  }
}
</script>

<style scoped>
.back-button {
  text-align: left;
  display: flex;
  align-items: center;
  opacity: 0.5;
  cursor: pointer;
}

.employee-info {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

}

.employee-info label {
  font-weight: bold;
}

.employee-info div {
  margin-bottom: 10px;
}

.employee-info input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.employee-info button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #0095ff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 600;
}


.employee-info .field {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: min(300px, 100%);
  align-items: center
}

.employee-info .field-input {
  text-align: left;
  width: min(300px, 100%);
  display: flex;
  flex-direction: column;
  gap: 8px
}
</style>