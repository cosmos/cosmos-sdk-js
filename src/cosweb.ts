import { ICosWeb } from './cosweb.d'

import Keys from './module/Keys/keys'

export default class CosWeb implements ICosWeb {

	constructor(public config: object) {

	}

	public get Keys() {
		return new Keys()
	}
}
