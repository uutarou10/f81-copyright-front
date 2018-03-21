import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import '../../styles/main.css'


export default () => {
  return (
    <div className="fullDiv" >
      <div className="mainImage" />
      <div className="mainDiv" >
        <p>this is top page!</p>
        <Button >Login</Button>
        <Button >Register</Button>
      </div>
    </div>
  )
}