import React from 'react'
import EventEmitter from 'eventemitter3';
import React, { useEffect } from 'react';

const eventEmitter = new EventEmitter();

// Component A (emitter)
function ComponentA() {
  const emitEvent = () => {
    eventEmitter.emit('myEvent', 'Hello from ComponentA');
  };

  return <button onClick={emitEvent}>Emit Event</button>;
}

// Component B (listener)
function ComponentB() {
  useEffect(() => {
    const handleEvent = (message) => {
      console.log('Received event in ComponentB:', message);
    };

    eventEmitter.on('myEvent', handleEvent);

    // Cleanup on unmount
    return () => {
      eventEmitter.off('myEvent', handleEvent);
    };
  }, []);

  return <div>ComponentB</div>;
}

// App Component
function Main() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
}

export default Main
