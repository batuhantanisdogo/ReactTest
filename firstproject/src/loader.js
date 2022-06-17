import React, { Component } from 'react'
import './loader.css'

 class loader extends Component {
    
  render() {
      const{isTrue} = this.props
    return (

      <div className='wraploader'>
          {isTrue && <span class="loader"></span>}
     </div>
    )
  }
}
loader.defaultProps = {
    isTrue:false
}
export default loader;