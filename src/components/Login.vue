<template>
    <div>
        <h1>ユーザー認証</h1>
        <p v-if="fail_auth" style="color: red;">認証に失敗しました</p>
        <div>
            アカウント名:
            <input type="text" placeholder="アカウント名" v-model="name">
        </div>

        <div>
            パスワード:
            <input type="password" placeholder="パスワード" v-model="passwd">
        </div>

        <div>
            <button @click="certification">認証</button>
            <button @click="toTopPage">キャンセル</button>
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

export default ({
    name: 'Login',

    data: function() {
        return {
            name: '',
            passwd: '',
            fail_auth: false
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

        toTopPage: function() {
            this.$router.push("/");
        }
    }
});
</script>
