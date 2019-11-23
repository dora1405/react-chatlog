import React from 'react';
import ChatEntry from './ChatEntry';

import './ChatLog.css'

const ChatLog = (props) => {
  const allEntry = props.entries.map((entry, i) => {
    return (
      <p className='chat-log'>
        <ChatEntry
        sender={entry.sender}
        body={entry.body}
        timestamp={entry.timeStamp}
        />
      </p>
    )
  });

  return (
    <section>
      {allEntry}
    </section>
  )
}



export default ChatLog;