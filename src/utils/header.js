import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import store from "../store";
import { requestLogout } from "../actions/userActions";
export function header(value) {
  if (value) {
    return (
      <div className="header" >
        <p>ログイン中</p>
        <div className="logout" >
          <Button onClick={requestLogout()} >ログアウト</Button>
        </div>
        
      </div>
    )
  }else {
    return (
      <div className="header">
      </div>
    )
  }
}