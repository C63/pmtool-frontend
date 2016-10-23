import { connect } from 'react-redux'
import { getCardDetail } from '../modules/carddetail'

import CardDetail from '../components/CardDetail'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  getCardDetail
}

const mapStateToProps = (state) => ({
  card : state.card
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail)
