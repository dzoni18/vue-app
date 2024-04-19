<template>
  <div class="loader-wrapper">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'loader-component'
}
</script>

<style>
.loader-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center
}

.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #6dd5ed;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
