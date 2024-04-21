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
          <input :value="employmentDate" @change="changeEmploymentDate" type="date" />
        </div>
        <div class="field-input">
          <label>Termination Date:</label>
          <input :value="terminationDate" @change="changeTerminationDate" type="date" />
        </div>
      </div>
    </div>
    <div v-if="messageShow" class="message-box">
      <div class="message-content">
        <div>Message</div>
        <b>{{ messageText }}</b>
      </div>
      <button class="close-button" @click="closeMessageBox">&#215;</button>
    </div>
  </div>
</template>

<script>
import { dateStatus } from '@/utils/constants';

export default {
  name: 'information-page',
  data() {
    return {
      messageShow: false,
      messageText: '',
      employmentDate: '',
      terminationDate: ''
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    onBack() {
      this.$router.push({
        name: 'home-page',
      });
    },
    closeMessageBox() {
      this.messageShow = false;
    },
    changeEmploymentDate(e) {
      const newDate = e.target.value;
      // Change the employment date
      this.employmentDate = newDate;
      const employmentDateToDate = new Date(this.employmentDate)
      // Get the current date
      let currentDate = new Date();
      // Fix for today date
      currentDate.setHours(23);
      currentDate.setMinutes(59);


      if (employmentDateToDate.getTime() > currentDate.getTime()) {
        this.messageText = dateStatus.futureEmployment;
      }

      if (employmentDateToDate.getTime() <= currentDate.getTime()) {
        this.messageText = dateStatus.pastEmployment;
      }

      this.messageShow = true;
    },
    changeTerminationDate(e) {
      const newDate = e.target.value;
      // Change the termination date
      this.terminationDate = newDate;
      const terminationDateToDate = new Date(this.terminationDate)
      // Get the current date
      let currentDate = new Date();
      // Fix for today date
      currentDate.setHours(23);
      currentDate.setMinutes(59);

      if (terminationDateToDate.getTime() > currentDate.getTime()) {
        this.messageText = dateStatus.futureTermination;
      }

      if (terminationDateToDate.getTime() <= currentDate.getTime()) {
        this.messageText = dateStatus.pastTermination;
      }

      this.messageShow = true;
    }
  },
  computed: {
    employee() {
      // Access the employee object from the route parameters
      return this.$route.params.employee;
    },
  },
  mounted() {
    if (this.employee && this.employee.EmploymentDate) {
      if (this.employee.EmploymentDate) {
        this.employmentDate = this.employee.EmploymentDate
      }

      if (this.employee.TerminationDate) {
        this.terminationDate = this.employee.TerminationDate
      }
    }
  },

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


.message-box {
  max-width: 600px;
  margin: auto;
  background-color: #f8f9fa;
  /* border: 1px solid #ced4da; */
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 3;
  padding-bottom: 5px;
  align-items: center;
  position: relative;
}

.message-box .message-content {
  /* margin-bottom: 20px; */
  padding: 5px;
}

.message-box .close-button {

  padding: 4px 10px;
  font-size: 14px;
  font-weight: bold;
  color: #00000068;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  position: absolute;
  right: 5px;
  top: 2px
}
</style>