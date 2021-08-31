<template>
  <div>
    <Nav></Nav>
    <h1>レポートを共有しようぜぃ!!</h1>
    <Search></Search>
    最新記事2020/1/1更新
    <News></News>
  </div>
</template>

<script>
import Nav from './Nav.vue'
import Search from './Search.vue'
import News from './News.vue'

export default {
  name: 'TopPage',
  components: {
    'Nav': Nav,
    'Search': Search,
    'News': News
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
