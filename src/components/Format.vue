<template>
    <div class="container mt-5 box">
        <h1 class="title is-2">Format closing mail</h1>
        <label for="tick_no" class="label">Ticket Number</label>
        <input class="input is-primary" type="text" id="tick_no" v-model="emailsub" />

        <label for="tick_user" class="label">User name</label>
        <input class="input is-primary" type="text" id="tick_user" v-model="username">

        <hr>
        <p class="title is-2">Email Subject</p>
        <h1 class="title is-3" id="email_sub" :class={colorgreen:copied,colored:!copied}>Resolving Ticket | Ticket Number:{{
                    emailsub }}</h1>
        <button class="button is-primary" @click="copyemailsub('email_sub')">Copy sub</button>
        <hr>
        <p class="title is-2">Email Body</p>
        <p class="title is-4 colorgreen" v-if="emailbody">EMAIL BODY COPIED</p>
        <textarea name="tc_msg" id="tc_msg_field" class="textarea is-large" readonly="true">Dear {{ username[0]+username.slice(1).toLowerCase().trimEnd()}},
As discussed, you have to reimage your system.
So once you will be in office kindly connect with me and visit local IS room with your system and its peripherals to get it reimaged.

NOTE: Take backup of your necessary documents as IS will not be responsible for any kind of data loss.

Hence I am closing the ticket to avoid further aging.

We prefer NOT TO REOPEN the ticket.

If you face any challenge, please reach out to me-2297004/ Reply on this mail chain/ Call me on undersigned number or if I am not available you can email my leads  rakesh.banik@tcs.com/debojit.sadhukhan@tcs.com for urgent help
    </textarea>
        <button class="button is-primary mt-2" @click="copyemailbody('tc_msg_field',)">Copy Body</button>

    </div>
</template>
    
<script>
    export default {
        name: 'Format',
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
    