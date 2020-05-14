<template>
    <div >
        <div class="card ticket-list m-2 p-2" id="table-edit">
            <h4 class="card-title">Tickets</h4>

            <div class="edit-table-toggle form-check" >
                <input type="checkbox" id="edit-table" class="form-check-input" v-model="editTable">
                <label for="edit-table" class="form-check-label">Edit table?</label>
            </div>

            <div id="ticket-table">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Client Name</th>
                        <th>Client Email</th>
                        <th>Issue</th>
                        <th>Model</th>
                        <!-- only showing this table header if edit table is true -->
                        <th v-show="editTable">Delete</th>
                    </tr>
                    <!-- not sure why we beed a v-bind for loops -->
                    <!-- looping over tickets to get each individual ticket -->
                    <!-- binding data from tickets to props in the TableRow component -->
                    <!-- when delete-ticket is emitted calling the ticketDeleted function -->
                    <TicketRow
                            v-for="ticket in tickets" v-bind:key="ticket.id"
                            v-bind:ticket="ticket"
                            v-bind:edit="editTable"
                            v-on:delete-ticket="ticketDeleted"
                    ></TicketRow>

                </table>
            </div>
        </div>
    </div>
</template>

<script>
// importing the ticketrow component so we can use it as an element in this component
import TicketRow from '@/components/TicketRow'

    export default {
        name: "TicketTable",
        // defining our child components here
        components : { TicketRow },
        data(){
            return{
                editTable:false
            }
        },
        props:{
            tickets: Array
        },
        methods: {
            // emitting delete-ticket and ticket to parent component
            ticketDeleted(ticket){
                this.$emit('delete-ticket',ticket)
            }
        }
    }
</script>

<style scoped>

#table-edit{
    background-color: #FF9900;
}

</style>