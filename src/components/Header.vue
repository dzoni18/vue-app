<template>
  <div>
    Vue App
    <hr class="cool-hr" />
  </div>

</template>

<script>
export default {
  name: 'header-component'

}
</script>

<style>
.cool-hr {
  height: 1.5px;
  /* Height of the hr */
  width: 100%;
  /* Full width */
  background: linear-gradient(to right, #ff7e5f, #feb47b, #ffdf98, #9ad3bc, #40b3c2, #3a95b9, #62719b, #a763a8, #ff7e5f);
  /* Gradient colors */
  margin: 20px 0;
  /* Margin for spacing */
  border: none;
  border-radius: 5px;
}
</style>