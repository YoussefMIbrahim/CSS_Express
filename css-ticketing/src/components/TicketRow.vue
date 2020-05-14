<template>
    <!-- maybe add different styles for complete and incomplete tickets -->
    <tr>
        <td>{{ticket.name}}</td>
        <td>{{ticket.email}}</td>
        <td>{{ticket.cName}}</td>
        <td>{{ticket.cEmail}}</td>
        <td>{{ticket.cIssues}}</td>
        <td>{{ticket.cModel}}</td>
        <td v-show="edit">
            <img class="delete-icon" v-on:click="deleteTicket(ticket)" src="@/assets/delete.png">
        </td>
    </tr>

</template>

<script>
    export default {
        name: "TicketRow",
        props: {
            ticket: Object,
            edit: Boolean
        },
        methods: {
            deleteTicket(ticket){
                if (confirm(`Delete ${student.name}?`)) {
                    this.$emit('delete-ticket', ticket)
                }
            }
        }
    }

</script>

<style >
    #student-table {
        max-height: 500px;
        overflow: scroll;
    }
    .delete-icon{
        height: 30px;
    }
</style>