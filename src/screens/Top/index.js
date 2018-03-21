import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import '../../styles/main.css'
import { styles } from "../../styles/style";
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'


const Top = ({push}) => {
  return (
    <div className="fullDiv" >
      <div className="mainImage" />
      <div className="formDiv" >
        <div className="top1" >
          <p>this is top page!</p>
        </div>
        <div className="top2" >
          <Button onClick={() => push('/login')} style={styles.button} >ログイン</Button>
          <Button onClick={() => push('/register')} style={styles.button} >登録</Button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  push
}, dispatch)

export default connect(null, mapDispatchToProps)(Top)