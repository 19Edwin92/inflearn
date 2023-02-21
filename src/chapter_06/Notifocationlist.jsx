 import React from "react";
 import Notification from "./Notification";

 const reservedNotifications = [
  { 
    id:1,
    message : "안녕하세요. 오늘 일정을 알려드립니다."
  },

  {
    id:2,
    message : "점심식사 시간입니다."
  },

  {
    id:3,
    message : "이제 곧 미팅이 시작됩니다. "
  },

  {
    id:4,
    message : "이제 곧 퇴근시간입니다. "
  },
  //그러나 강의와 다르게 리액트버전 18에서는 Strict Mode의 동작이 변경되었기 때문인 것으로 보인다. 
  //https://www.inflearn.com/questions/619705/notificationlist-jsx-챕터-6장-실습-내용-질문-동시에-2개씩-나옴
  //프로덕션을 배포하게 되면 Strict Mode는 무시되기 때무에 정상적으로 작동할텐데, 그렇지 않은 상황에서는 2개씩 작동할 것이다. 
  //인덱스.js로 이동해서 해당 모드를 풀어주자. 
 ]

 var timer;

 class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

    componentDidMount() {
      const { notifications } = this.state;
      timer = setInterval(() => {
        if(notifications.length < reservedNotifications.length) {
          const index = notifications.length;
          notifications.push(reservedNotifications[index]);
          //state를 업데이트 
          this.setState({
            notifications:notifications,
          });
        } else {
          this.setState({
            notifications:[],
          });
          clearInterval(timer);
        }
      }, 1000);
    }

    render() {
      return (
        <div>
          {this.state.notifications.map((notification)=> {
            return <Notification 
                key={notification.id}
                id={notification.id}          
                message={notification.message}             
              />;
          })}
        </div>
      )
    }
 }

 export default NotificationList