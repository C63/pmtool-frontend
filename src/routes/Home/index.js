import HomeView from './components/HomeView'
import { requireAuthentication } from '../../components/AuthenticateComponent'

// Sync route definition
export default {
  component : requireAuthentication(HomeView)
}
