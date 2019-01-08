import { ICosWeb } from './cosweb.d'

import Keys from './module/Keys/keys'

import HTTPEndpoint from './util/HTTPEndpoint'

export default class CosWeb implements ICosWeb {

	http: HTTPEndpoint;
	constructor(public config: object) {
		this.http = new HTTPEndpoint(config)
	}

	public get Keys() {
		return new Keys(this)
	}
}
