import React from "react";

const styles = {
  wrapper : {
    margin : 8,
    padding : 8,
    display : "flex",
    flexDirection : "row",
    border: "1px solid grey",
    borderRadius: 16,
  },

  messageText : {
    color:"black",
    fontSize:16,
  }
}

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    //현재 this.state는 아무런 값을 가지고 있지 않습니다. 
    //새로운 파일을 하나 생성하겠습니다. 
  }

  // 해당부분은 콘솔에서 생명주기를 확인하기 위해서 만든 것임으로 생략이 가능하다. 
  // componentDidMount() {
  //   console.log(`${this.props.id} componentDidMount() called.`)}
  // componentDidUpdate() {
  //   console.log(`${this.props.id} componentDidUpdate() called.`)}
  // componentWillUnmount() {
  //   console.log(`${this.props.id} componentWillUnmount() called.`)}

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    )}}

export default Notification