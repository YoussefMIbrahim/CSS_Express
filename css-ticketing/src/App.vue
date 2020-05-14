<template>
  <div id="app">
    <!-- insert some sort of image up here  a cat -->
    <h1>CSS ticketing app! again...but with much less time...</h1>
    <!-- add a von that calls a function when it recieves the emit -->
    <NewTicketForm v-on:ticket-added="ticketAdded"> </NewTicketForm>
    <TicketTable
    v-bind:tickets="tickets"
    v-on:delete-ticket="ticketDeleted"
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
      tickets: []
    }
  },
  mounted(){

  },
  methods:{
    ticketAdded(ticket){
      return 'test'
      
    },
    ticketDeleted(ticket){
      return'test2'
    }
  }
}
</script>

<style>

</style>
