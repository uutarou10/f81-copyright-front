import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import '../../styles/main.css'
import { styles } from "../../styles/style";


export default () => {
  return (
    <div className="fullDiv" >
      <div className="mainImage" />
      <div className="mainDiv" >
        <div className="top1" >
          <p>this is top page!</p>
        </div>
        <div className="top2" >
          <Button onClick={() => linkTo('/login')} style={styles.button} >ログイン</Button>
          <Button onClick={() => linkTo('/register')} style={styles.button} >登録</Button>
        </div>
      </div>
    </div>
  )
}

function linkTo(path) {
  window.location.href = path
}