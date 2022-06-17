import React, { Component } from 'react'
import Loader from './loader'
export default class  extends Component {
    state = {isSubmit:false,isLogin:false,firstName:"",surName:"",datas:[],isSuccess:false,token:"",department:false,depList:[]}
    setSubmit = async() => {
       
        this.setState({isSubmit:true,isLogin:false})
        
        //gurcan.altintas@dogostore.com//Altıntaş
        await fetch(`https://localhost:5001/Home/Login/${this.state.email}/${this.state.lastname}`,{method:"POST",headers:{'Content-Type':'application/json'}})
        .then((res) => res.json())
        .then(result => {
            
            fetch(`https://localhost:5001/Home/GetUser/`,{method:"GET",headers:{'Content-Type':'application/json','Authorization':'Bearer ' + result.data.token}})
            .then((res) => res.json())
            .then(res_ => {
                if(res_.data.length != 0){
                    this.setState({
                        isLogin:true,
                        isSuccess:true,
                        isSubmit:false,
                        firstName:result.data.name,
                        surName:result.data.lastName,
                        datas:res_.data,
                        token:result.data.token
                    })
                }
            }
            
        )
            .catch((error) => {
               this.setState({
                   isLogin:true,
                   isSubmit:false
               }) 
            })
    }
        )
    }
    changeData(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    addDescription(){
        console.log(this.state.description);
         fetch(`https://localhost:5001/Home/AddDepartment`,{method:"POST",body:JSON.stringify({"description":this.state.description}),headers:{'Content-Type':'application/json','Authorization':'Bearer ' + this.state.token}})
        .then((res) => res.json())
        .then(result => {
            console.log(result);
            if(result.data.isSuccessfull != false){
                this.setState({
                    department:true,
                    depList:result.data
                })
            }
            
        })
        }
  render() {
    return (
        <div className='form' style={{backgroundColor:"#a0a6db"}}>
        
        
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input onChange={this.changeData.bind(this)} value={this.state.email} name="email"  type="text" className="form-control" id="exampleInputPassword1" placeholder="Email"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Surname</label>
            <input onChange={this.changeData.bind(this)} value={this.state.lastname} name="lastname" type="text" className="form-control" id="exampleInputPassword1" placeholder="Surname"/>
        </div>
        <button onClick={this.setSubmit.bind(this)}  type="submit" className="btn btn-primary">Login</button>
        {
        this.state.isSubmit && <Loader isTrue={this.state.isSubmit}/>
        }
        {
        this.state.isLogin && this.state.isSuccess &&
        <div>
        <p style={{color:"yellow"}}>Giriş Başarılı, Hoşgeldin {this.state.firstName} {this.state.surName}</p>
        {
            this.state.datas.map((val) => (
                <p>{val.firstName} {val.lastName}</p>
            ))
        }
        <input onChange={this.changeData.bind(this)} value={this.state.description} name="description" type="text" className="form-control" id="exampleInputPassword1" placeholder="Description"/>
        <a onClick={this.addDescription.bind(this)} className='btn btn-dark'>AddData</a>
        </div>
        }
        {
            this.state.isLogin && this.state.isSuccess == false &&
            <div>
            <p style={{color:"red"}}>Giriş Başarısız</p>
            </div>
        }
        {
            this.state.department && 
            <div>
                <p>Başarıyla Description Eklendi</p>
                {
                    this.state.depList.map((val) => (
                        <p>{val.description}</p>
                    ))
                }

                
            </div>
        }
    </div>
    
    )
  }
}
