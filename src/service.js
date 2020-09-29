import axios from 'axios'

const BASE_URL = 'http://localhost:3005'

export const getAllQuotes = () => axios.get(`${BASE_URL}/quotes`)
export const postQuote = (quote) => axios.post(`${BASE_URL}/quotes`,quote)

export const updateQuote = (id,update) => axios.patch(`${BASE_URL}/quotes/${id}`,update)

