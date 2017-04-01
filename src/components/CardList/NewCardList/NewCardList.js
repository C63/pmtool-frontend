import React from 'react'
import onClickOutside from 'react-onclickoutside'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { addListId } from '../../../store/api'

class NewCardList extends React.Component {
  constructor () {
    super()

    this.state = {
      isAddListOpen: false
    }

    this.handleAddList = this.handleAddList.bind(this)
  }

  openAddListForm () {
    this.setState({
      isAddListOpen: true
    })
  }

  closeAddListForm () {
    this.setState({
      isAddListOpen: false
    })
  }

  handleClickOutside () {
    this.closeAddListForm()
  }

  handleAddList (e) {
    e.preventDefault()
    this.props.addList({
      'name' : findDOMNode(this.refs.list_name).value,
      'description' : 'test',
      'project-id': this.context.projectId
    })
    this.closeAddListForm()
  }

  render () {
    const { isAddListOpen } = this.state

    return (
      <div className='new-card-list'>
        { !isAddListOpen &&
          <div className='add-list-btn' onClick={() => this.openAddListForm()}>
            <i className='material-icons'>add_circle</i>
            <span>Add new column</span>
          </div>
        }
        {
          isAddListOpen &&
          <div className='add-list-form'>
            <form onSubmit={this.handleAddList} id='dkm'>
              <FormGroup>
                <FormControl placeholder='Enter list name' ref='list_name' />
                <div className='add-list-form__btn'>
                  <Button type='submit'>Save</Button>
                  <Button onClick={() => this.closeAddListForm()} >X</Button>
                </div>
              </FormGroup>
            </form>
          </div>
        }
      </div>
    )
  }
}

NewCardList.propTypes = {
  addList: React.PropTypes.func,
  params: React.PropTypes.object
}

NewCardList.contextTypes = {
  projectId: React.PropTypes.string
}
const mapDispatchToProps = (dispatch) => ({
  addList: (params) => dispatch(addListId(params))
})

const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(NewCardList))
