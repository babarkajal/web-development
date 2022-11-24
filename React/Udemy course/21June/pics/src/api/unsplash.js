import axios from 'axios'


export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
        Authorization:
          'Client-ID lBnQPfQ88JjfI3SgInPlHE1Arx88-ykeN6s7w5xQP3o',
      }
});