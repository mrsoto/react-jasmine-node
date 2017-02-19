import React from 'react'
import {findDOMNode} from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import Main from  'my-app/index'

describe('Givin a Main instance', () => {

  it('should be defined', () => {
    expect(Main).toBeDefined()
  })

  describe('when is rendered', () => {
    let detached

    beforeEach(()=>{
      detached = ReactTestUtils.renderIntoDocument(<Main/>)
    })

    it('should render a Main compoent', () => {
      ReactTestUtils.isElementOfType(Main)
    })

    it('should render a button', () =>{
      let span = ReactTestUtils.findRenderedDOMComponentWithTag(detached, 'span')
      expect(span.innerHTML).toBe('Hello World!')
    })

    describe('and was tested using the dom', () => {
      let root

      beforeEach(()=>{
        root = findDOMNode(detached)
      })

      it('then it should be a Main component', () => {
        expect(root).not.toBe(null)
      })

      it('should render a div', () => {
        expect(root.tagName).toBe('DIV')
      })

      it('should render a span', () => {
        const span = root.querySelector('.hello')
        expect(span.innerHTML).toBe('Hello World!')
      })
    })
  })
})
