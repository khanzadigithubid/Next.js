 'use client'

export default function Alert() {
  const showAlert = () => {
    alert('Clicked')
  }
  return (
    <div>
      <h1>Event Handling</h1>
      <button onClick={showAlert}>Click Me</button>
    </div>
  );
};

/* Event Handling */

/* Responding to Click: Handle events like click with function. */

/* Event Handling is the process of responding to user interaction (e.g., click, from submission.) */