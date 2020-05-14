<template>
    <div id="input-form">

        <div class="card add-ticket m-2 p-2" id="form">
            <h4 class="card-title">Add new Ticket</h4>

            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" class="form-control" v-model.trim = "studentName">
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" class="form-control" v-model.trim = "studentEmail">
            </div>

            <div class="form-group">
                <label for="client-name">Client Name</label>
                <input id="client-name" class="form-control" v-model.trim = "clientName">
            </div>

            <div class="form-group">
                <label for="client-email">Client Email</label>
                <input id="client-email" class="form-control" v-model.trim = "clientEmail">
            </div>

            <div class="form-group">
                <label for="issue">Problem Description</label>
                <input id="issue" class="form-control" v-model.trim = "issues">
            </div>

            <div class="form-group">
                <label for="pc-model">Model</label>
                <input id="pc-model" class="form-control" v-model.trim = "model">
            </div>

            <button class="btn btn-primary" v-on:click.prevent="addTicket()">Add</button>
        </div>

    </div>
</template>

<script>
export default {
    name: "NewTicketForm",
    data(){
        return{
            studentName: '',
            studentEmail: '',
            clientName: '',
            clientEmail: '',
            issues:'',
            model:'',
            errors: [],
        }
    },
    methods :{
        // not sure whu this method didn't work
        // validation(){
        //     this.errors = []

        //     if(!this.studentName){this.errors.push('Enter name')}
        //     if(!this.studentEmail){this.errors.push('Enter email')}
        //     if(!this.clientName){this.errors.push('Enter client name ')}
        //     if(!this.clientEmail){this.errors.push('Enter client email')}
        //     if(!this.issues){this.errors.push('Enter the issue')}
        //     if(!this.model){this.errors.push('Enter the Model')}
        //     this.$emit('test-name', this.errors)
        // },
        addTicket(){
            // this.errors = []
            //insert validation here

            // validation()

            this.errors = []

            if(!this.studentName){this.errors.push('Enter name')}
            if(!this.studentEmail){this.errors.push('Enter email')}
            if(!this.clientName){this.errors.push('Enter client name ')}
            if(!this.clientEmail){this.errors.push('Enter client email')}
            if(!this.issues){this.errors.push('Enter the issue')}
            if(!this.model){this.errors.push('Enter the Model')}

            this.$emit('test-name', this.errors)


            if(this.errors.length == 0){
                console.log('were in this place now');
                
                 let ticket = {name: this.studentName, email: this.studentEmail, clientName: this.clientName,
                    clientEmail: this.clientEmail, issue: this.issues, model: this.model}

                this.$emit('ticket-added', ticket)

                this.studentName = ''
                this.studentEmail = ''
                this.clientName = ''
                this.clientEmail = ''
                this.issues = ''
                this.model = ''
                
            }
          
        },
    }
}
</script>

<style>
#form{
    background-color:  #FF9900;
    margin-block: 50px;
}
.card-title{
    color: #6599FF;
}
/* #input-form{
    margin-bottom: 50px;
    background-color: #FFDE00;
} */
</style>