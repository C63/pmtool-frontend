import React from 'react'
import onClickOutside from 'react-onclickoutside'

class NewCardList extends React.Component {
  constructor () {
    super()

    this.state = {
      isAddListOpen: false
    }
    this.renderAddListForm = this.renderAddListForm.bind(this)
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
  renderAddListForm () {
    const { isAddListOpen } = this.state
    if (!isAddListOpen) {
      return (
        <div className='add-list-btn' onClick={() => this.openAddListForm()}>
          <i className='material-icons'>add_circle</i>
          <span>Add new column</span>
        </div>
      )
    }
    return (
      <div className='add-list-form'>
        <input type='text' placeholder='Add list' />
        <div className='add-list-form__btn'>
          <button className='btn' onClick={() => this.closeAddListForm()} >Save</button>
          <button className='btn' onClick={() => this.closeAddListForm()} >X</button>
        </div>
      </div>
    )
  }
  render () {
    return (
      <div className='new-card-list'>
        {this.renderAddListForm()}
      </div>
    )
  }
}

export default onClickOutside(NewCardList)
