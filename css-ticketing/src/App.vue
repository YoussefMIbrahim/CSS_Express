<template>
  <div id="app">
    <!-- insert some sort of image up here  a cat -->
    <h1 id="title">CSS ticketing app!</h1>
    <div id="button-container">
      <button v-on:click="tabSelected(1)" class="btn btn-secondary btn-edit">Add Ticket</button>
      <button v-on:click="tabSelected(2)" class="btn btn-secondary btn-edit">Show Ticket</button>
    </div>
    <!-- add a von that calls a function when it recieves the emit -->
    <NewTicketForm v-on:ticket-added="ticketAdded" v-if="currentTab == 1"> </NewTicketForm>
    <TicketTable
    v-bind:tickets="tickets"
    v-on:delete-ticket="ticketDeleted"
    v-if="currentTab == 2"
    > </TicketTable>


  </div>
</template>

<script>
import NewTicketForm from '@/components/NewTicketForm'
import TicketTable from '@/components/TicketTable'

export default {
  name: 'App',
  components: {
    NewTicketForm,
    TicketTable
  },
  data(){
    return{
      tickets: [],
      currentTab: 1
    }
  },
  mounted(){
      this.updateTickets()
  },
  methods:{
    ticketAdded(ticket){
      this.$ticket_api.addTicket(ticket).then(ticket => {
        this.updateTickets()
      })
    },
    ticketDeleted(ticket){
      this.$ticket_api.deleteTicket(ticket).then(() => {
        this.updateTickets()
      })
      
    },
    updateTickets(){
      this.$ticket_api.getAllTickets().then(tickets => {        
        this.tickets = tickets
      })
    },
    tabSelected(tab){
      this.currentTab = tab
    }
  }
}
</script>

<style>
#app{
  background-color: #FFDE00;
}
#title{
  color:  #097054;
  text-align: center;
  font-style: italic;
  /* font-style:  */
}
#button-container{
  text-align: center;
}
.btn-edit{
  margin-right: 5px;
  margin-left: 5px;
}
</style>
