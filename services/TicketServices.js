import axios from 'axios'

const base_url = 'api/tickets'

export default{

    getAllTickets(){
        return axios.get(base_url).then(response => {
            return response.data
        })
    }
}