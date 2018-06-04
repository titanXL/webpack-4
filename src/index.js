import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'

import styles from './style.css'

const cubed = x =>  x*x*x
const doubled = x => x * 2

const Loading = () => <div>Loading!!!...</div>

const LoadableComponent = Loadable({
  loader: () => import('./test'),
  loading: Loading
})

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imported: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <React.Fragment>
      <div className={styles.test}>HELLO REACT!!</div>
      {this.state.imported}
      <button onClick={this.handleClick}>Click</button>
      </React.Fragment>
    )
  }
  handleClick() {
    this.setState({imported: <LoadableComponent />})
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))
