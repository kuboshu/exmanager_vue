<template>
    <div>
        <h1>ユーザー登録</h1>
        <div>
            アカウント名：
            <input type="text" placeholder="アカウント名" v-model="account_name" @input="checkName">
            <p v-if="!account_name_ok" style="color: red;">{{account_name_ng_msg}}</p>
        </div>

        <div>
            メールアドレス：
            <input type="text" placeholder="メールアドレス" v-model="email" @input="checkEmail">
            <p v-if="!email_ok" style="color: red;">{{email_ng_msg}}</p>
        </div>

        <div>
            パスワード：
            <input type="password" placeholder="パスワード" v-model="passwd" @input="checkPasswd">
            <p v-if="!passwd_ok" style="color: red;">{{passwd_ng_msg}}</p>
        </div>

        <div>
            パスワード(確認用)：
            <input type="password" placeholder="パスワード確認" v-model="verify_passwd" @input="verifyPassword">
            <p v-if="!verify_passwd_ok" style="color: red;">一致しません</p>
        </div>

        <div>
            <button @click="toUserTop">登録</button>
            <button @click="toPreviousPage">キャンセル</button>
        </div>
    </div>
</template>

<script>
const used_account = [
    'akira',
    'akari',
    'aika',
    'alice',
];

const used_email = [
    'akira@himeya.com',
    'akari@aria.com',
    'aika@himeya.com',
    'alice@orange.com'
];

export default ({
    name: 'UserReg',

    data: function() {
        return {
            account_name_ng_msg: '必須項目です',
            account_name_ok: false,
            account_name:'',

            email_ng_msg: '必須項目です',
            email_ok: false,
            email: '',

            passwd_ng_msg: '必須項目です',
            passwd_ok: false,
            passwd: '',

            verify_passwd_ok: (this.passwd_ok == this.verify_passwd),
            verify_passwd: ''
        };
    },

    methods: {
        checkName: function() {
            if (this.account_name == '') {
                this.account_name_ok = false;
                this.account_name_ng_msg = '必須項目です'
            } else if (!this.account_name.match(/^[a-zA-Z]+[a-zA-Z0-9_]*$/)) {
                this.account_name_ok = false;
                this.account_name_ng_msg = '1文字目はアルファベット、２文字目以降は英数字もしくは"_"で設定してください'
            } else if (this.account_name.length > 20) {
                this.account_name_ok = false;
                this.account_name_ng_msg = '8文字以上20文字以下に設定してください'
            } else if (used_account.includes(this.account_name)) {
                this.account_name_ok = false;
                this.account_name_ng_msg = '既に使用されてます'
            } else {
                this.account_name_ok = true;
            }
        },

        checkEmail: function() {
            if (this.email == '') {
                this.email_ok = false;
                this.email_ng_msg = '必須項目です'
            } else if (used_email.includes(this.email)) {
                this.email_ok = false;
                this.email_ng_msg = '既に使用されてます'
            } else if (!this.email.match(/^[a-zA-Z]+[a-zA-Z_]*@[a-zA-Z]+[a-zA-Z_]*$/)) {
                this.email_ok = false;
                this.email_ng_msg = '有効なアドレスを入力してください'
            } else if (this.email.length > 100) {
                this.email_ok = false;
                this.email_ng_msg = '100文字以下で設定してください'
            } else {
                this.email_ok = true;
            }
        },

        checkPasswd: function() {
            if (this.passwd == '') {
                this.passwd_ok = false;
                this.passwd_ng_msg = '必須項目です';
            } else if (this.passwd.length < 8 || this.passwd.length > 50) {
                this.passwd_ok = false;
                this.passwd_ng_msg = '8文字以上50文字以下で設定してください';
            } else if (this.passwd.match(/[^a-zA-Z_]/)) {
                this.passwd_ok = false;
                this.passwd_ng_msg = '英数字および"_"のみ使用できます。';
            } else {
                this.passwd_ok = true;
            }

            this.verifyPassword();
        },

        verifyPassword: function() {
            if (this.verify_passwd != this.passwd) {
                this.verify_passwd_ok = false;
            } else {
                this.verify_passwd_ok = true;
            }
        },

        toUserTop: function() {
            if (
                this.account_name_ok &&
                this.email_ok &&
                this.passwd_ok &&
                this.verify_passwd 
            ) {
                this.$router.push('usertop');
            }
        },

        toPreviousPage: function() {
            this.$router.back();
        }
    }
});
</script>
