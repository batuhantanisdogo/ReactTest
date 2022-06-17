import React from 'react'
import Form from './form'
import Login from './Login'
export default function batuhan (props) {
  return (
    <div>
        <div className='container'>
            <div className="row">
                <div className='col-md-12'>
                    <Login/>
                    <Form/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
