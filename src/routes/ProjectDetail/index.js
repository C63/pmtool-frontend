import { requireAuthentication } from '../../components/AuthenticateComponent'

import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'project/:projectId',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ProjectDetailContainer = require('./containers/ProjectDetailContainer').default
      const reducer = require('./modules/index').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'project', reducer })

      /*  Return getComponent   */
      cb(null, requireAuthentication(ProjectDetailContainer))

    /* Webpack named bundle   */
    }, 'project')
  }
})
