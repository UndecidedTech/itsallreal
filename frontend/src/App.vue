<template>
  <div id="app">
   <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Its All Real</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <h3 class="pl-3 ml-2 mr-5 border rounded">Articles</h3>
              </li>
              <li v-for="(article, index) in articles" :key="index" class="nav-item border rounded border-secondary mr-2 ml-2">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  {{ article.title }}
                </a>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
          </div>
        </nav>

        <main role="main" class="col-md-8 ml-sm-auto col-lg-8">
          <usa-map class="mapStyle" width="400" height="300" ></usa-map>
          <div class="pl-4 pr-4 border rounded border-secondary chat">
            <div v-for="(tweet, index) in tweets" :key="index" class="card border-primary mt-3 mb-3" style="min-width:100%;">
              <div class="card-header">
                <div class="icon-container d-inline">
                  <img :src="tweet.avi || 'https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg'"/>
                </div>
                {{ tweet.author }}</div>
                <div class="card-body text-primary">
                  <p class="card-text">{{ tweet.text }}</p>
                </div>
              </div>
          </div>
        </main>
        <nav class="col-md-2 d-none d-md-block bg-light navbar-right">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li v-for="(state, index) in states" :key="index" class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  {{ article.title }}
                </a>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import UsaMap from './components/UsaMap.vue'
export default {
  components: {
    UsaMap
  },
  data () {
    return {
      articles: [{
        title: 'Trump Case Makes Supreme Court'
      }],
      tweets: [{
        text: 'This is from Nate Silver',
        author: '@Natesilver537'
      },
      {
        text: 'This is from Nate Silver',
        author: '@Natesilver537'
      },
      {
        text: 'This is from Nate Silver',
        author: '@Natesilver537'
      },
      {
        text: 'This is from Nate Silver',
        author: '@Natesilver537'
      },
      {
        text: 'This is from Nate Silver',
        author: '@Natesilver537'
      }]
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
