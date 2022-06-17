import './form.css'
import React, { Component } from 'react'
import Content from './content'
import Loader from './loader'
import Fetch from './fetch'
import FetchHeader from './fetchheader'
export default class form extends Component {
    state = {isTrue:false,isPress:false,isFetch:false,isHeaderFetch:false}
    addData(){
        this.setState({isTrue:true})
        setTimeout(() => {
            this.setState({isTrue:false,isPress:true})
        }, 2000);
    }
    changeData(event){
        
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    clearData = () =>{
        this.setState({
            name:"",surname:"",email:"",isPress:false
        });
    }
    fetchData = () => {
        this.setState({
            isFetch:true
        })
    }
    fetchHeader = () => {
        this.setState({
            isHeaderFetch:true
        })
    }
  render() {
    return (
        <div className='form' style={{backgroundColor:"#a0a6db"}}>
        
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address
                </label>
                <input onChange={this.changeData.bind(this)} value={this.state.email}  type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input onChange={this.changeData.bind(this)} value={this.state.name} name="name"  type="text" className="form-control" id="exampleInputPassword1" placeholder="Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Surname</label>
                <input onChange={this.changeData.bind(this)} value={this.state.surname} name="surname" type="text" className="form-control" id="exampleInputPassword1" placeholder="Surname"/>
            </div>
            <button onClick={this.addData.bind(this)}  type="submit" className="btn btn-primary">Submit</button>
            <a className='btn btn-dark' onClick={this.fetchData}>FetchData</a>
            <a className='btn btn-dark' onClick={this.fetchHeader}>FETCH-HEADER</a>
            {
                this.state.isHeaderFetch && <FetchHeader/>
            }
            {
                this.state.isFetch && <Fetch/>
            }
            
            {
                this.state.isTrue && <Loader isTrue={this.state.isTrue} />
            }
            {
                
                this.state.isPress && <Content func={this.clearData} datas={{email:this.state.email,name:this.state.name,surname:this.state.surname}} />
            }
            
        </div>
    )
  }
}

