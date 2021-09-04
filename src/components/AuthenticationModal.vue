<template>
    <div>
        <button @click="toggleModal">ログイン</button>
        <div v-if="disp_modal" class="text-black fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
            <div class="relative mx-auto w-auto max-w-2xl">
                <div class="bg-white w-full rounded shadow-2xl flex flex-col">
                    <div class="text-2xl font-mono font-bold text-center mt-5 mb-5">アカウント認証</div>
                    <div v-if="(auth_tried && !auth_success)" class="text-red-500 text-center mb-5">認証失敗</div>
                    <div class="flex flex-col justify-center ml-10 mr-10">
                        <div class="mb-3 flex">
                            <div class="pr-10 w-50">アカウント名:</div>
                            <input class="border-solid border-2 border-blue-500 rounded-md" type="text" v-model="name">
                        </div>
                        <div class="mb-3 flex">
                            <div class="pr-10">パスワード:</div>
                            <input class="border-solid border-2 border-blue-500 rounded-md" type="password" v-model="passwd">
                        </div>
                    </div>
                    <div class="flex">
                        <button class="rounded bg-green-500 text-white px-6 mt-1 py-2 w-1/4 m-auto mb-5" @click="authenticate">認証</button>
                        <button class="rounded bg-green-500 text-white px-6 mt-1 py-2 w-2/4 m-auto mb-5" @click="toggleModal">キャンセル</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="disp_modal" class="absolute inset-0 z-40 opacity-25 bg-black"></div>
    </div>
</template>

<script>
export default ({
    name: 'AuthenticationModal',
    data: function() {
        return {
            disp_modal: false,
            auth_success: false,
            auth_tried: false,
            name: '',
            passwd: '',
        };
    },
    methods: {
        toggleModal: function() {
            this.auth_success = false;
            this.auth_tried = false;
            this.name = '';
            this.passwd = '';
            this.disp_modal = !this.disp_modal;
        },
        authenticate() {
            this.auth_tried = true;
            if ((this.name == 'akira') && (this.passwd == 'akira_passwd')) {
                this.$router.push('usertop');
            }
        }
    }
});
</script>