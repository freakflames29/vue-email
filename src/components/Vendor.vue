<template>
<div class="container mt-5 box">
    <h1 class="title is-2">Vendor mail</h1>
    <label for="tick_no" class="label">Vendor Name</label>
    <input class="input is-primary" type="text" id="tick_no" v-model="emailsub" />

    <p class="label is-2">
        Vendor company
    </p>
    <div class="select">
        <select id="vendor_list" v-model="vendor">
            <option value="HP">HP</option>
            <option class="Acer">Acer</option>
            <option class="Lenovo">Lenovo</option>
            <option value="DELL">DELL</option>
        </select>
    </div>

    <p class="label is-2">
        Vendor location
    </p>
    <div class="select">
        <select id="vendor_list" v-model="location">
            <option value="Infospace 7th floor ODC C">Infospace 7th floor ODC C</option>
            <option class="Oval 6th floor ODC C">Oval 6th floor ODC C</option>
            <option class="Sabina Park 2nd floor IS room">Sabina Park 2nd floor IS room</option>
        </select>
    </div>

    <hr>
    <p class="title is-2">Email Subject</p>
    <h1 class="title is-3" id="email_sub" :class={colorgreen:copied,colored:!copied}>Apporval for vendor visit at {{ location }}</h1>
    <button class="button is-primary" @click="copyemailsub('email_sub')">Copy sub</button>
    <hr>
    <p class="title is-2">Email Body</p>
    <p class="title is-4 colorgreen" v-if="emailbody">EMAIL BODY COPIED</p>
    <textarea name="tc_msg" id="tc_msg_field" class="textarea is-large" readonly="true">Dear Team,
Kindly allow the below mentioned vendor to enter in {{ location }}.

Name: {{ emailsub }}
Company: {{ vendor }}
    
        </textarea>
    <button class="button is-primary mt-2" @click="copyemailbody('tc_msg_field',)">Copy Body</button>

</div>
</template>

    
        
        
    
<script>
export default {
    name: 'Vendor',
    data() {
        return {
            emailsub: null,
            emailbody: null,
            caseid: '',
            username: '',
            copied: false,
            emailbody: false,
            vendor: '',
            location: ''
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
