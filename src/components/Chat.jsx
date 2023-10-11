import ChatUser from "./ChatUser";
function Chat() {
  const users = [
      {
          name: 'User 1',
          lastMessage: 'Hello!',
          unreadMessages: 2,
          image: '../../src/assets/images/user/user-01.png',
      },
      {
          name: 'User 2',
          lastMessage: 'Hi there!',
          unreadMessages: 0,
          image: '../../src/assets/images/user/user-02.png',
      },
      {
        name: 'User 1',
        lastMessage: 'Hello!',
        unreadMessages: 2,
        image: '../../src/assets/images/user/user-03.png',
    },
    {
        name: 'User 2',
        lastMessage: 'Hi there!',
        unreadMessages: 0,
        image: '../../src/assets/images/user/user-04.png',
    },
      // Add more users as needed
  ];

  return (
      <div className='m-[1em] ml-0 md:ml-[1em] mt-0 shadow-md '>
          {users.map((user, index) => (
            <div className="border-b-2 border-gray-100">
              <ChatUser key={index} user={user} />
            </div>
              
          ))}
      </div>
  );
}

export default Chat;
