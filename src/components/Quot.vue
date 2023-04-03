<template>
    <div class="container mt-5 box">
        <h1 class="title is-2">Quotation closing mail</h1>
        <label for="tick_no" class="label">Ticket Number</label>
        <input class="input is-primary" type="text" id="tick_no" v-model="emailsub" />

        <label for="tick_user" class="label">User name</label>
        <input class="input is-primary" type="text" id="tick_user" v-model="username">

        <label for="caseid" class="label">Case id</label>
        <input class="input is-primary" type="text" id="caseid" v-model="caseid">

        <p class="label is-2">
            Vendor
        </p>
        <div class="select">
            <select id="vendor_list" v-model="vendor">
                <option value="HP">HP</option>
                <option class="Acer">Acer</option>
                <option class="Lenovo">Lenovo</option>
                <option value="DELL">DELL</option>
            </select>
        </div>

        <hr>
        <p class="title is-2">Email Subject</p>
        <h1 class="title is-3" id="email_sub" :class={colorgreen:copied,colored:!copied}>Resolving Ticket | Ticket Number:{{
                    emailsub }}</h1>
        <button class="button is-primary" @click="copyemailsub('email_sub')">Copy sub</button>
        <hr>
        <p class="title is-2">Email Body</p>
        <p class="title is-4 colorgreen" v-if="emailbody">EMAIL BODY COPIED</p>
        <textarea name="tc_msg" id="tc_msg_field" class="textarea is-large" readonly="true">Dear {{ username[0]+username.slice(1).toLowerCase().trimEnd()}},
As discussed, call log has been done with {{ vendor }}. The case number is {{ caseid }}. A quotation will be raised and it will be recieved in your mail box within next 48 hours.
So once you get the quotation kindly revert that to me in this mail.So that I can take necessary actions agains it.

Also if you face any kind of issue kindly let us know that we can allocate a temporary asset at office to avoid any type of production loss.
Hence I am closing the ticket to avoid further aging.

We prefer NOT TO REOPEN the ticket.

If you face any challenge, please reach out to me-2297004/ Reply on this mail chain/ Call me on undersigned number or if I am not available you can email my leads  rakesh.banik@tcs.com/debojit.sadhukhan@tcs.com for urgent help.

Note:For temporary asset placement at your desk kindly fill the below mentioned fields and revert me the same.
Name:
Emp ID:
Project:
ODC:
Building:
Seat no:

            </textarea>
        <button class="button is-primary mt-2" @click="copyemailbody('tc_msg_field',)">Copy Body</button>

    </div>
</template>

    
        
        
    
<script>
export default {
    name: 'ABC',
    data() {
        return {
            emailsub: null,
            emailbody: null,
            caseid: '',
            username: '',
            copied: false,
            emailbody: false,
            vendor: '',
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
