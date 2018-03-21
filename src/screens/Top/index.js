import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import '../../styles/main.css'
import { styles } from "../../styles/style";
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'


const Top = ({push, user}) => {
  return (
    <div className="fullDiv" >
      <div className="mainImage" />
      <div className="formDiv" >
        <div className="top1" >
        <div className="center" >
          <img className="titleImage" src={require("../../images/title_1.png")} />
        </div>
          <p className="titleText" >
            ブロックチェーンを用いた著作権保護サービス<br />
            あなたの独創的なアイデアを守ります
          </p>
        </div>
        <div className="top2" >
          {user.isLogined ? (
            <Button onClick={() => push('/posts')} style={styles.button} >投稿</Button>
          ) : (
            <div>
              <Button onClick={() => push('/login')} style={styles.button} >ログイン</Button>
              <Button onClick={() => push('/register')} style={styles.button} >登録</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  push
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Top)