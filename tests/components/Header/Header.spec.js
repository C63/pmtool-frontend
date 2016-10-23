import React from 'react'
import { Header } from 'components/Header/Header'
import { IndexLink } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  describe('Navigation links...', () => {
    it('Should render a Link to Home route', () => {
      expect(_wrapper.contains(
        <IndexLink activeClassName='route--active' to='/'>
          Home
        </IndexLink>
      )).to.be.true
    })
  })
})
