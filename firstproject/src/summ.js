import React, { Component } from 'react'

export default class 

extends Component {
    state = ({toplam:0})
    setValues = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    sumValues = () => {
        var num1 = +(this.state.number1)
        var num2 = +(this.state.number2)
        var summ = num1+num2
        this.setState({
            toplam: summ
        })
    }

  render() {
    return (
      <div>

        <label>Number - 1</label>
        <input name='number1' onChange={this.setValues} type="number"></input>
        <br/>
        <label>Number - 2</label>
        <input name='number2' onChange={this.setValues} type="number"></input>
        
        <a className='btn btn-warning' style={{display:"block",fontSize:"20px",letterSpacing:"0.1em"}} onClick={this.sumValues}>Summ</a>
        <p>Toplam Değer : {this.state.toplam}</p>
      </div>
    )
  }
}
