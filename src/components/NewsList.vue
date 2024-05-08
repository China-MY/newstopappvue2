<template>
  <div>
    <ul>
      <li v-for="item in newsList" :key="item.uniquekey" @click="toNews(item.url)">
        <div class="img-box">
          <img :src="item.thumbnail_pic_s" />
        </div>
        <div class="text-box">
          <h3>{{item.title}}</h3>
          <p>{{item.author_name}} {{item.date}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";

export default {
  props: {
    data: Array,
  },
  setup(props) {
    const state = reactive({
      newsList: computed(()=>{
        let arr = props.data;
        for(let i=0;i<arr.length;i++){
          if(arr[i].title.length>24){
            arr[i].title = arr[i].title.substr(0,24)+'...';
          }
        }
        return arr;
      })
    });

    function toNews(url){
      location.href = url;
    }

    return {
      ...toRefs(state),
      toNews
    };
  },
};
</script>

<style scoped>
ul {
  width: 100%;
}
ul li {
  box-sizing: border-box;
  padding: 6px;
  width: 100%;
  height: 93px;
  display: flex;
  border-bottom: dashed 1px #aaa;
  user-select: none;
}
ul li .img-box {
  flex: 0 0 100px;
  height: 80px;
}
ul li .img-box img {
  width: 100px;
  height: 80px;
}
ul li .text-box {
  flex: 1;
  box-sizing: border-box;
  padding-left: 10px;
}
ul li .text-box h3 {
  font-size: 16px;
  font-weight: 300;
}
ul li .text-box p {
  font-size: 12px;
  text-align: right;
}
</style>