import React from 'react'
import {findDOMNode} from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import Form from  'my-app/form'

describe('Givin a Form instance', () => {
  describe('when is rendered', () => {
    let buttonElement
    let counterElement
    let detached

    beforeEach(()=>{
      detached = ReactTestUtils.renderIntoDocument(<Form/>)
      const button = ReactTestUtils.findRenderedDOMComponentWithTag(detached, 'button')
      const counter = ReactTestUtils.findRenderedDOMComponentWithClass(detached, 'counter')
      buttonElement = findDOMNode(button)
      counterElement = findDOMNode(counter)
    })

    it('should render an input button', () => {
      expect(buttonElement.tagName).toBe('BUTTON')
      expect(buttonElement.value).toBe('+')
    })

    it('should render a element with className="counter"', () => {
      expect(counterElement.tagName).toBe('SPAN')
    })

    it('should start with counter = 0', () => {
      expect(counterElement.innerHTML).toBe('0')
    })

    describe('when the button is clicked one time', () => {
      beforeEach(() => {
        ReactTestUtils.Simulate.click(buttonElement)
      })

      it('Then should change to "1"', () => {
        expect(counterElement.innerHTML).toBe('1')
      })
    })

    describe('when the button is clicked two times', () => {
      it('Then should change to "2"', () => {
        ReactTestUtils.Simulate.click(buttonElement)
        ReactTestUtils.Simulate.click(buttonElement)

        expect(counterElement.innerHTML).toBe('2')
      })
    })
  })
})
