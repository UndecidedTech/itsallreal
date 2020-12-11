<template>
    <div>
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
          <div class="row" v-if="user.role === 'admin'">
              <h1 class="pl-5">Upload Tweet</h1>
          </div>
          <div class="row pb-4 pl-3" v-if="user.role === 'admin'">
            <input type="text" class="form-control col-6" placeholder="Tweet URL">
            <mutli-select class="col-6"/>
          </div>
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
import UsaMap from '../components/UsaMap.vue'
import { mapGetters, mapActions } from 'vuex'
import MutliSelect from '../components/mutliSelect.vue'
export default {
  name: 'mapScreen',
  components: {
    UsaMap,
    MutliSelect
  },
  data () {
    return {
      count: 0,
      showSignin: false,
      articles: [{
        title: 'Trump Case Makes Supreme Court'
      }]
    }
  },
  methods: {
    ...mapActions({
      getTweets: 'tweets/getTweets',
      uploadTweet: 'tweets/uploadTweet'
    })
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
      tweets: 'tweets/tweets'
    })
  },
  created () {
    this.getTweets()
  }
}
</script>

<style lang="scss" scoped>

</style>
