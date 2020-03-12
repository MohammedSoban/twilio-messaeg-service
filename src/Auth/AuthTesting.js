import React, { Component } from 'react'

class AuthTesting extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            firstName:'',
            lastName:'',
            phoneNumber:'',
            pinCode:''

        }
    }
    
    handleChange=(event)=>{

        this.setState({
            [event.target.name]:event.target.value
        })

    }

    getPin=()=>{

        console.log(this.state.phoneNumber)
    //    var url =`http://localhost:3002/sendCode/?${phoneNumber}`
       var url =`http://localhost:3002/sendCode?phonenumber=${this.state.phoneNumber}`
    //    http://localhost:3002/login?phonenumber=923343155658
       fetch(url,{
           
           method:'GET',
           headers:{
            "Content-Type": "application/json"
           },
       }).then((response)=>{
           debugger
           return response.json()
       }).then((response)=>{
         debugger

         if (response.status === 200) {
      
            console.log('message sent successfuly',response)
         }
      
         else if(response.status===500){
            console.log('error occured')
        }
   
       }).catch((error)=>{
           console.log('error occured',error)
       })

    }

    verifyPin=()=>{

        var url =`http://localhost:3002/verifyCode?phonenumber=${this.state.phoneNumber}&code=${this.state.pinCode}`
        //    http://localhost:3002/login?phonenumber=923343155658
           fetch(url,{
               
               method:'GET',
               headers:{
                "Content-Type": "application/json"
               },
           }).then((response)=>{
               return response.json()
           }).then((response)=>{
             
            if (response.status === 200) {
                console.log('code verfied',response)
          
            }
           else if(response.status===500){
                console.log('error occured')
            }
           }).catch((error)=>{
               console.log('error occured',error)
           })

    }

    signUp=()=>{

      
    }


    render() {
        return (
            <div>
                <h1>Sign UP!</h1>
              
                <input placeholder="First Name" name='firstName' type='text' value={this.state.firstName} onChange={(event)=>this.handleChange(event)}/><br/>
                <input placeholder="Last Name" name='lastName' type='text' value={this.state.lastName} onChange={(event)=>this.handleChange(event)}/><br/>
                <input placeholder="Phone Number" name='phoneNumber' type='number' value={this.state.phoneNumber} onChange={(event)=>this.handleChange(event)}/><br/>
                <button onClick={()=>this.getPin(this.state.phoneNumber)}>get Pin</button>
                <button onClick={()=>this.verifyPin()}>verify Pin</button><br/>
                <input placeholder="Pin Code" name='pinCode' type='number' value={this.state.pinCode} onChange={(event)=>this.handleChange(event)}/><br/>
                <button onClick={()=>this.signUp()}>singUp</button><br/>

               
            </div>
        )
    }
}
export default AuthTesting;

