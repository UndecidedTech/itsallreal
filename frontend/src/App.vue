<template>
  <div id="app">
   <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0 hover" @click="showSign">Its All Real</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a ref="signIn" class="nav-link" href="#" v-show="showSignin" @click="goSignIn">Sign In</a>
        </li>
      </ul>
   </nav>
   <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 0,
      showSignin: false
    }
  },
  methods: {
    showSign () {
      console.log('clicked')
      this.count += 1
      if (this.count > 9) {
        this.showSignin = true
      }
    },
    goSignIn () {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.chat {
  overflow-y: auto;
  margin: 0 auto;
  height: 40vh;
  width: 60vw;
  word-wrap: break-word;
  border:lightslategrey;
  border-style: solid;
}
.icon-container {
  width: 60px;
  height: 60px;
  position: relative;
}

.icon-container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
  max-height: 60px;
  overflow: hidden;
  width: auto;
}

.navbar-right {
  right: auto;
}
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 48px; /* Height of navbar */
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}
.hover {
  cursor: pointer
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
.mapStyle {
  margin: 5vh;
}

/*
 * Utilities
 */

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }
</style>
