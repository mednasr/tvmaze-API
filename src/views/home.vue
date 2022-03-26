<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">TV Series</h2>
          <ul>
            <li v-for="tv in orderBy(tvShows, 'rating.average', -1)">
              <div class="card">
                <div class="card-content">
                  <div class="card-content-details">
                    <div class="content-title">
                      <p><strong>Title</strong></p>
                      <p>{{ tv.name }}</p>
                    </div>
                    <div class="content-genre">
                      <p><strong>Genre</strong></p>
                      <p>{{ tv.genres.join(', ') }}</p>
                    </div>
                    <div class="content-rating">
                      <p><strong>Rating</strong></p>
                      <p>{{ tv.rating.average }}</p>
                    </div>
                  </div>
                  <div class="content-image">
                    <img
                      v-bind:src="
                        tv.image !== null
                          ? tv.image.medium
                          : 'https://via.placeholder.com/210x295.png?text=Cover+unavailable'
                      "
                    />
                  </div>
                </div>
                <footer class="card-footer">
                  <button class="link card-footer-item" @click="viewMore(tv)">
                    <i class="fas fa-plus"></i>
                    <span>View more</span>
                  </button>
                </footer>
              </div>
            </li>
          </ul>
        </div>
        <div class="notification is-info" v-show="message">{{ message }}</div>
      </div>
    </div>
    <Modal
      :show="this.displayShow"
      :isOpen="showModal"
      @handleClose="closeModal"
    >
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Modal from '@/components/modal';
import Vue2Filters from 'vue2-filters';

export default {
  name: 'TvShows',
  mixins: [Vue2Filters.mixin],

  data() {
    return {
      displayShow: {},
      message: '',
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  async created() {
    await this.loadTvShows();
    //console.log(this.tvShows);
  },
  methods: {
    ...mapActions(['loadTvshowsAction']),
    viewMore(serie) {
      this.displayShow = serie;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async loadTvShows() {
      this.message = 'Loading TV shows!';
      await this.loadTvshowsAction();
      this.message = '';
    },
  },
  computed: {
    ...mapState(['tvShows']),
  },
};
</script>
