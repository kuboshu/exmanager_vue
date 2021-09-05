<template>
    <div>
        <div class="bg h-1000 pb-20">
            <div class="text-right text-white">
                <div class="flex justify-end">
                    <div class="mr-5 mt-2">
                        <ButtonTop></ButtonTop>
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

        <h1>ユーザー認証</h1>
        <p v-if="fail_auth" style="color: red;">認証に失敗しました</p>
        <div>
            アカウント名:
            <input type="text" placeholder="アカウント名" @keydown.enter="certification" v-model="name">
        </div>

        <div>
            パスワード:
            <input type="password" placeholder="パスワード" @keydown.enter="certification" v-model="passwd">
        </div>

        <div>
            <button @click="certification">認証</button>
            <button @click="cancel">キャンセル</button>
        </div>
    </div>
</template>

<script>
const users = new Map([
    ['akira', 'akira_passwd'],
    ['akari', 'akari_passwd'],
    ['aika', 'aika_passwd'],
    ['alice', 'alice_passwd'],
]);


import Search from './parts/SearchField.vue'
import ButtonTop from './parts/ButtonTop.vue'

export default ({
    name: 'Login',
    components: {
        'Search': Search,
        'ButtonTop': ButtonTop
    },
    data: function() {
        return {
            name: '',
            passwd: '',
            fail_auth: false,
            prev_path: ''
        };
    },

    methods: {
        certification: function() {
            if ((users.has(this.name)) && (users.get(this.name) == this.passwd)) {
                this.$router.push("usertop");
            } else {
                this.fail_auth = true;
            }
        },

        cancel: function() {
            if (this.prev_path == '/reg') {
                this.$router.push("/");
            } else {
                this.$router.back();
            }
        },
    },

    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.prev_path = from.path
        });
    }
});
</script>

<style scoped>
.bg {
  background-image: url("~@/assets/background.jpg") ;
  background-size: cover;
}
</style>