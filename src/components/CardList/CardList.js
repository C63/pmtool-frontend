import React from 'react'
import Card from './Card/Card'
import NewCardModal from '../Modal/NewCardModal/NewCardModal'
import { Scrollbars } from 'react-custom-scrollbars'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { getTasksDetail } from '../../store/api'

class CardList extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
  componentWillMount () {
    const { list } = this.props
    this.props.fetchTaskDetails(list.get('task-list-id'))
  }

  componentWillReceiveProps (nextProps) {
    const { list } = this.props
    if (!Immutable.is(this.props.accounts, nextProps.accounts)) {
      this.props.fetchTaskDetails(list.get('task-list-id'))
    }
  }

  toggleModal () {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen
    })
  }
  render () {
    const { list, listMode } = this.props
    const { isOpen } = this.state
    const listSize = list.get('tasks')
    return (
      <div className='card-list'>
        <div className='card-list__header'>
          <span className='card-list__header__name'>{list.get('name')}</span>
          { listSize ? <span className='card-list__header__counter'>{listSize.size}</span> : null}
          <span className='card-list__header__right'>
            <span className='plus' onClick={this.toggleModal}>+</span>
            <span className='dots'>...</span>
          </span>
          { isOpen &&
            <NewCardModal
              isOpen={isOpen}
              closeModal={this.toggleModal}
              taskListId={list.get('task-list-id')} />
          }
        </div>
        { listMode === 'vertical' && listSize &&
          <Scrollbars autoHide >
            { list.get('tasks').map((card, index) => {
              return (
                <Card key={index} card={card} listMode={listMode} />
              )
            })}
          </Scrollbars>
        }

        { listMode === 'horizontal' && listSize &&
          list.get('tasks').map((card, index) => {
            return (
              <Card key={index} card={card} listMode={listMode} />
            )
          })
        }

        { !listSize &&
          <div className='no_task'>No task</div>
        }
      </div>
    )
  }
}

CardList.propTypes = {
  list: React.PropTypes.object,
  toggleModal: React.PropTypes.func,
  listMode: React.PropTypes.string,
  fetchTaskDetails: React.PropTypes.func,
  accounts: React.PropTypes.instanceOf(Immutable.List)
}

const mapStatetoProps = (state) => ({
  accounts: state.project.get('accounts')
})
const mapDispatchtoProps = (dispatch) => ({
  fetchTaskDetails: (taskListId) => (dispatch(getTasksDetail(taskListId)))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(CardList)
