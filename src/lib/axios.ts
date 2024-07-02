import axios from 'axios'

const { VITE_VOUNCHERS_API_LINK, VITE_IMPACTO_API_LINK } = import.meta.env

export const vounchersAPI = axios.create({
  baseURL: VITE_VOUNCHERS_API_LINK,
})

export const api = axios.create({
  baseURL: VITE_IMPACTO_API_LINK
})