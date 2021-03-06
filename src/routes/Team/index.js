import { injectReducer } from '../../store/reducers'
import { requireAuthentication } from '../../components/AuthenticateComponent'

export default (store) => ({
  path : 'team',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Team = require('./containers/TeamContainer').default
      const reducer = require('./modules/Team').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'team', reducer })

      /*  Return getComponent   */
      cb(null, requireAuthentication(Team))

    /* Webpack named bundle   */
    }, 'team')
  }
})
