import axios from 'axios'

const createAxioRequest = (baseURL, timeout)=>{
	return axios.create({
		baseURL: baseURL,
		timeout: timeout
	})
}

export default class HTTPEndpoint {
	constructor(config){
		this.HTTPBaseURL = config.baseUrl
		this.request = createAxioRequest(`${this.HTTPBaseURL}`, 30000)
	}
}