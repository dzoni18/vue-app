<template>
  <div id="app">
    <template>
      <div class="page-wrapper">
        <Header />
        <div class="page-content">
          <router-view></router-view>
        </div>
        <Footer />

      </div>
    </template>

  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';


export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app * {
  box-sizing: border-box;
}

/* global page wrapper */
.page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f8f9fa;
  /* Light gray background color */
  border-radius: 8px;
  /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Shadow effect */
  position: relative;
}

.page-content {
  height: 70vh;
  overflow: auto;
}
</style>
