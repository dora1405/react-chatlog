import React from 'react';
import Timestamp from './Timestamp';

import './ChatEntry.css'

const ChatEntry = (props) => {
  let timestamp = <Timestamp time={props.timestamp}/>
  let className;

  if (props.sender === 'Estragon') {
    className = 'remote'
  } else {
    className = 'local'
  }

  return (
    <section className={`chat-entry ${className}`}>
      <h3 className='entry-name'>
        {props.sender}
      </h3>
      <section className='entry-bubble'>
        <p>
          {props.body}
        </p>
        <p className='entry-time'>
          {timestamp}
        </p>
      </section>
    </section>
  )
}

export default ChatEntry;