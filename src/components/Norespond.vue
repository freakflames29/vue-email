<template>
    <div class="container mt-5 box">
        <h1 class="title is-2">Not respond mail</h1>
        <label for="tick_no" class="label">Ticket Number</label>
        <input class="input is-primary" type="text" id="tick_no" v-model="emailsub" />
    
        <label for="tick_user" class="label">User name</label>
        <input class="input is-primary" type="text" id="tick_user" v-model="username">
    
        <hr>
        <p class="title is-2">Email Subject</p>
        <h1 class="title is-3" id="email_sub" :class={colorgreen:copied,colored:!copied}>Regarding GHD Ticket | Ticket Number:{{ emailsub }}</h1>
        <button class="button is-primary" @click="copyemailsub('email_sub')">Copy sub</button>
        <hr>
        <p class="title is-2">Email Body</p>
        <p class="title is-4 colorgreen" v-if="emailbody">EMAIL BODY COPIED</p>
        <textarea name="tc_msg" id="tc_msg_field" class="textarea is-large" readonly="true">Dear {{ username[0]+username.slice(1).toLowerCase().trimEnd()}},
 Tried to reach you multiple times but the calls are  remain unanswered.
 I have also pinged you over teams/G-chat. So kindly connect with me as soon as you can to discuss the issue.
    </textarea>
        <button class="button is-primary mt-2" @click="copyemailbody('tc_msg_field',)">Copy Body</button>
    
    </div>
    </template>
    
    <script>
    export default {
        name: 'Norespond',
        data() {
            return {
                emailsub: null,
                emailbody: null,
                username: '',
                copied: false,
                emailbody: false,
            }
        },
        methods: {
            copyemailsub(id) {
                const body = document.getElementById(id);
                // body.select();
                // body.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(body.textContent);
    
                this.copied = true;
    
                setTimeout(() => {
                    this.copied = false;
    
                }, 2000)
            },
            copyemailbody(id) {
                const body = document.getElementById(id);
                body.select();
                body.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(body.textContent);
    
                this.emailbody = true;
    
                setTimeout(() => {
                    this.emailbody = false;
                }, 2000)
            }
        }
    
    }
    </script>
    
    <style scoped>
    .colorgreen {
        color: green;
    }
    
   
    </style>
    