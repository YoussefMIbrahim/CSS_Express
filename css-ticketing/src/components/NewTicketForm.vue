<template>
<!-- div that encompasses the entire template because it can only have one element -->
    <div id="input-form">

        <div class="card add-ticket m-2 p-2" id="form">
            <h4 class="card-title">Add new Ticket</h4>

            <div class="form-group">
                <label for="name">Name</label>
                <!-- using v model to pass the data to our code and trin to remove extra blank spaces -->
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
            <!-- calling the addTicket function when the button is clicked -->
            <button class="btn btn-primary" v-on:click.prevent="addTicket()">Add</button>
        </div>

    </div>
</template>

<script>
export default {
    // export name for this componenet
    name: "NewTicketForm",
    // data we're collecting from the user input on the above form
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

        addTicket(){
            // empty array that will hold a list of validation errors
            this.errors = []
            //checking for all of the validation errors
            if(!this.studentName){this.errors.push('Enter name')}
            if(!this.studentEmail){this.errors.push('Enter email')}
            if(!this.clientName){this.errors.push('Enter client name ')}
            if(!this.clientEmail){this.errors.push('Enter client email')}
            if(!this.issues){this.errors.push('Enter the issue')}
            if(!this.model){this.errors.push('Enter the Model')}
            // emmmiting the array to parent so it's passed on to the Validation component
            this.$emit('test-name', this.errors)

            //checking if there were an errors in the array
            if(this.errors.length == 0){
                console.log('were in this place now');
                // creating a ticket object with all of our data (making sure the keys match the column names in DB)
                 let ticket = {name: this.studentName, email: this.studentEmail, clientName: this.clientName,
                    clientEmail: this.clientEmail, issue: this.issues, model: this.model}
                //emmiting the object to our parent component
                this.$emit('ticket-added', ticket)
                //clearing fields
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
</style>