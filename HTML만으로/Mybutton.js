function Mybutton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    { onClick:()=> setIsClicked(true) },
    isClicked ? 'Clicked!' : 'Click here!'
  )
}


const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Mybutton), domContainer);

// 강의에서는 일단은 이렇게 생긴 것이 리액트라고만 설명한다.
// 보면 함수컴포넌트를 통해서 Mybutton이 domContainert식별자를 통해서 HTML div[id="root"]와 연결된다. 
// 이때, render해주며, 요소를 생성해주는 것을 볼 수 있다. 
// 생성된 function Mybutton(props)는 내용을 보면 useState로 만들었는데,
// isClicked 상태에 따라서  'Clicked!' : 'Click here!' 를 달아주었다. 
// 바로 setIsClicked(true)가 되면서 state의 상태가 변경되었을 때 말이다. 
// 그런데 초기값으로 설졍해둔 useState(false) 내용에 따라, 처음화면에는 'Clicked!' 가 기록될 것이다. 