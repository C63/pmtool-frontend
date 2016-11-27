import ProjectDetail from './components/ProjectDetail'
import { requireAuthentication } from '../../components/AuthenticateComponent'

// Sync route definition
export default {
  path : 'project',
  component : requireAuthentication(ProjectDetail)
}
