import React from 'react'
import UserClass from './UserClass'

class About extends React.Component {
  constructor(props){
    super(props);
    console.log("parent constructor")
  }
  // to make api calls- 
   componentDidMount(){
    console.log("parent didmount")
  }

  render() {
    console.log("parent rendered")
    return (
      <div>
      <h1>About</h1>
      <UserClass/>
      </div>
    )
  }  
}

export default About;