import { normalize } from 'normalizr'

export default (data, schemas) => (normalize(data, schemas))
