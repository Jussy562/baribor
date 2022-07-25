import React from 'react';
import { PopupWidget } from 'react-calendly';

function Schedule() {
  return (
    <div>
        <PopupWidget 
            url="https://calendly.com/bariborpaago/30min"
            rootElement={document.getElementById("root")}
            text="schedule a meeting with me!"
            textColor="#ffffff"
            color="#00a2ff"
        />
    </div>
  )
}

export default Schedule;