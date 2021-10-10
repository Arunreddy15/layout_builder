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
          const isShowContent = showContent ? 'content' : 'content not-show'
          const isShowLeft = showLeftNavbar
            ? 'left-navbar'
            : 'left-navbar not-show'
          const isShowRight = showRightNavbar
            ? 'right-navbar'
            : 'right-navbar not-show'

          return (
            <div className="flexible-layout">
              <div className={isShowLeft}>
                <h1>Left Navbar Menu</h1>
                <div className="leftnavbar-list">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
              </div>
              <div className={isShowContent}>
                <h1>Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div className={isShowRight}>
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
