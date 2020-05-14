import axios from 'axios'

const base_url = 'api/tickets'

export default{

    getAllTickets(){
        return axios.get(base_url).then(response => {
            
            return response.data
            
        })
    },
    addTicket(ticket){
        return axios.post(base_url, ticket).then(response => {
            return response.data
        })
    },
    deleteTicket(ticket){
        return axios.delete(`${base_url}/${ticket.id}`).then(response => {
            return response.data
        })
    }

}