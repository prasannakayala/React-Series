import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name: "dummy name",
                location:"default",
                avatar_url:""

            }
        }
        // console.log("child constructor")
    }
   

    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/akshaymarch7");
        const json=await data.json()
        this.setState({userInfo: json})
        console.log(json)
   }

    render(){
        const {name, location, avatar_url}=this.state.userInfo
        // console.log("child rendered")
        return(
            <div className="user-card">
            <img src={avatar_url} alt="saini" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
        </div>
        )
    }
}

export default UserClass


{/* 
---mounting---
Constructor (dummy data)
render (dummy data)
    <HTML Dummy>
ComponentDidMount
    <API Call>
    <this.setState> -->state variable updated

---Update---
    render(API data)
    <HTML (new API data>)
   call componentDidUpdate

---unmount---

*/}