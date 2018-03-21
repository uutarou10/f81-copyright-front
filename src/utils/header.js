import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

export function header(value, logout) {
  if (value !== null) {
    return (
      <div className="header" >
        <p>ログイン中</p>
        <div className="logout" >
          <Button onClick={() => logout()} >ログアウト</Button>
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