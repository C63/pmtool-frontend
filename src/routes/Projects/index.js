import { injectReducer } from '../../store/reducers'
import { requireAuthentication } from '../../components/AuthenticateComponent'

export default (store) => ({
  path : 'projects',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Projects = require('./containers/ProjectsContainer').default
      const reducer = require('./modules/projects').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'projects', reducer })

      /*  Return getComponent   */
      cb(null, requireAuthentication(Projects))

    /* Webpack named bundle   */
    }, 'projects')
  }
})
