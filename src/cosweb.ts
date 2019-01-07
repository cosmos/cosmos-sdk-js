import { iCosWeb } from './cosweb.d'

import { default as tool} from './util/tool'

export default class CosWeb implements iCosWeb {
    
    constructor(public config: object) {
        
    }

}
