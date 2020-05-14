<template>
  <div id="app">
    <!-- insert some sort of image up here  a cat -->
    <h1>CSS ticketing app! again...but with much less time...</h1>
    <!-- add a von that calls a function when it recieves the emit -->
    <NewTicketForm> </NewTicketForm>

  </div>
</template>

<script>
import NewTicketForm from '@/components/NewTicketForm'

export default {
  name: 'App',
  components: {
    NewTicketForm
  }
}
</script>

<style>

</style>
