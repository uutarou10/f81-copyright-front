import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import store from "../store";
import {  } from "../actions/userActions";
export function header(value) {
  if (value !== null) {
    return (
      <div className="header" >
        <p>ログイン中</p>
        <div className="logout" >
          <Button  >ログアウト</Button>
        </div>
        
      </div>
    )
  }else (
    <div className="header" />
  )
}