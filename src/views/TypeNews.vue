<template>
  <div>
    <div class="new-img">
      <a :href="news.url">
        <img :src="news.thumbnail_pic_s" />
      </a>
    </div>
    <div class="type-news">
      <ul>
        <li
          v-for="item in typeList"
          :key="item.id"
          @click="change(item.id)"
          :class="{ typeinit: isAlive == item.id }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <NewsList :data="newsList" v-if="newsList.length"></NewsList>
  </div>
</template>

<script>
import NewsList from "../components/NewsList.vue";
import { reactive, toRefs } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      typeList: [
        { id: "guonei", name: "国内" },
        { id: "guoji", name: "国际" },
        { id: "yule", name: "娱乐" },
        { id: "tiyu", name: "体育" },
        { id: "junshi", name: "军事" },
        { id: "keji", name: "科技" },
        { id: "caijing", name: "财经" },
        { id: "youxi", name: "游戏" },
        { id: "qiche", name: "汽车" },
        { id: "jiankang", name: "健康" },
      ],
      isAlive: "guonei",
      newsList: [],
      news: {},
    });

    function change(id) {
      state.isAlive = id;
      init(id);
    }

    function init(type) {
      axios
        .get("/juheNews", {
          params: {
            type: type,
            key: "655962c80fdaccf03709b567da3bc795",
          },
        })
        .then(function (response) {
          state.newsList = response.data.result.data;
          state.news =
            state.newsList[Math.floor(Math.random() * state.newsList.length)];
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    init("guonei");

    return {
      ...toRefs(state),
      change,
    };
  },
  components: {
    NewsList,
  },
};
</script>

<style scoped>
.new-img img {
  width: 100%;
  height: 200px;
  display: block;
}
.type-news {
  width: 100%;
  margin-top: 8px;
}
.type-news ul {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.type-news ul li {
  box-sizing: border-box;
  width: 48px;
  height: 22px;
  border: solid 1px #e03d3e;
  border-radius: 11px;
  margin: 5px 10px;

  font-size: 14px;
  color: #e03d3e;

  display: flex;
  justify-content: center;
  align-items: center;
}
.typeinit {
  background-color: #e03d3e;
  color: #fff !important;
}
</style>