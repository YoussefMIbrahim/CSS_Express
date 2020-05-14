<template>
<!-- table for our database columns -->
    <tr>
        <!-- getting the data from our ticket object and putting it in the table -->
        <td>{{ticket.name}}</td>
        <td>{{ticket.email}}</td>
        <td>{{ticket.clientName}}</td>
        <td>{{ticket.clientEmail}}</td>
        <td>{{ticket.issue}}</td>
        <td>{{ticket.model}}</td>
        <!-- table column that only shows if edit is true(checked) -->
        <td v-show="edit">
            <!-- an on click function that passes the ticket as a paramater -->
            <img class="delete-icon" v-on:click="deleteTicket(ticket)" src="@/assets/delete.png">
        </td>
    </tr>

</template>

<script>
    export default {
        name: "TicketRow",
        props: {
            // data we're recieving from the parent component
            ticket: Object,
            edit: Boolean
        },
        methods: {
            
            deleteTicket(ticket){
                //asking the user if they're sure of their choice to delete a row
                if (confirm(`Delete ${ticket.name}?`)) {
                    // emitting the chosen ticket for deletion to parent component
                    this.$emit('delete-ticket', ticket)
                }
            }
        }
    }
</script>

<style >
    table {
        max-height: 500px;
        overflow: scroll;
    }
    .delete-icon{
        height: 30px;
    }
</style>