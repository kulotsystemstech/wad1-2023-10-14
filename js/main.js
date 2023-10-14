const app = Vue.createApp({
    /** DATA */
    data() {
        return {
            message1: '',
            message2: '',

            user1Typing   : false,
            user2Typing   : false,
            user1TypeTimer: null,
            user2TypeTimer: null,

            messages: [
                /*{
                    id     : 1,
                    user   : 1,
                    content: 'Hello User2!'
                },
                {
                    id     : 2,
                    user   : 2,
                    content: 'Hi there User1, how are you doing?'
                },
                {
                    id     : 3,
                    user   : 1,
                    content: 'Fine. Thanks for asking. How about you?'
                },
                {
                    id     : 4,
                    user   : 2,
                    content: 'Fine too!'
                }*/
            ]
        }
    },

    /** METHODS */
    methods: {
        /**
         * @method sendMessage1
         * @description Handle User 1 send message.
         */
        sendMessage1() {
            this.messages.push({
                id     : (this.messages.length + 1),
                user   : 1,
                content: this.message1
            });

            this.message1 = '';
            this.user1Typing = false;
            this.scrollMessagesToBottom();
        },

        /**
         * @method sendMessage2
         * @description Handle User 2 send message.
         */
        sendMessage2() {
            this.messages.push({
                id     : (this.messages.length + 1),
                user   : 2,
                content: this.message2
            });

            this.message2 = '';
            this.user2Typing = false;
            this.scrollMessagesToBottom();
        },

        /**
         * @method setUser1Typing
         * @description Handle User 1 typing.
         */
        setUser1Typing() {
            clearTimeout(this.user1TypeTimer);
            this.user1Typing = true;
            this.user1TypeTimer = setTimeout(() => {
                this.user1Typing = false;
            }, 3000);
        },

        /**
         * @method setUser2Typing
         * @description Handle User 2 typing.
         */
        setUser2Typing() {
            clearTimeout(this.user2TypeTimer);
            this.user2Typing = true;
            this.user2TypeTimer = setTimeout(() => {
                this.user2Typing = false;
            }, 3000);
        },

        /**
         * @method scrollMessagesToBottom
         * @description Scroll messages elements to bottom.
         */
        scrollMessagesToBottom() {
            this.$nextTick(() => {
                const divMessages = document.querySelectorAll('.messages');
                divMessages.forEach(divMessage => {
                    divMessage.scrollTop = divMessage.scrollHeight;
                });
            });
        }
    }
});

app.mount('#app');
