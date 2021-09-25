// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          const isShowContent = showContent ? '' : 'not-show'
          const isShowLeft = showLeftNavbar ? '' : 'not-show'
          const isShowRight = showRightNavbar ? '' : 'not-show'

          return (
            <div className="flexible-layout">
              <div className="left-navbar">
                <h1>Left Navbar Menu</h1>
                <ul className="leftnavbar-list">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
              <div className="content">
                <h1>Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div className="right-navbar">
                <h1>Right Navbar</h1>
                <ul className="rightnavbar-list">
                  <li>
                    <div className="adds">Ad 1</div>
                  </li>
                  <li>
                    <div className="adds">Ad 2</div>
                  </li>
                </ul>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Body
