import React, { Component } from 'react'
import Count from './count'
import Summ from './summ'
export default class content extends Component {
    state = {
        name : this.props.datas.name,
        surname : this.props.datas.surname,
        email : this.props.datas.email
    }
    onDelete(){
        this.props.func();
    }

  render() {
    const{name,surname,email}=this.props.datas
    
    return (
        <div>
            
            {
                name !== "" ?
                <><p>{name}</p><p>{surname}</p><p>{email}</p></>
                : <p>Veri Gelmedi</p>
            }
           <a onClick={this.onDelete.bind(this)} className='btn btn-dark btn-lg'>Clear</a> 
            <Count/>
            <Summ/>
        </div>
        
    )
  }
}
