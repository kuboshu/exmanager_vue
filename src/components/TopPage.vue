<template>
  <div>
    <div class="bg h-1000 pb-20">
      <div class="text-right text-white">
        <div class="flex justify-end">
          <div class="mr-5 mt-2">
            <Authentication></Authentication>
          </div>
          <div class="mr-5 mt-2">
            <Registration></Registration>
          </div>
        </div>
      </div>
      <div class="mb-10 mt-10">
        <div class="font-mono text-center text-white text-5xl mb-0 mt-0">
          レポートを共有しようぜぃ!!
        </div>
        <div class="font-mono text-center text-white">
          組織力は知識の共有で向上する
        </div>
      </div>
      <div class="text-center">
        <Search size="50"></Search>
      </div>
    </div>


    <div class="flex">
      <div>最新記事2020/1/1更新</div>
      <div class="content-center">
        <News></News>
      </div>
    </div>
  </div>
</template>

<script>
import News from './News.vue'
import Search from './parts/SearchField.vue'
import Registration from './parts/ButtonUserRegistration.vue'
import Authentication from './AuthenticationModal.vue'

export default {
  name: 'TopPage',
  components: {
    'News': News,
    'Search': Search,
    'Registration': Registration,
    'Authentication': Authentication,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  background-image: url("~@/assets/background.jpg") ;
  background-size: cover;
}
</style>
