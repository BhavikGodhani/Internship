import React, { useState, useMemo } from 'react';

const ChildComponent = ({ data, onClick }) => {
  console.log('ChildComponent re-rendered');
  return (
    <div>
      <button onClick={onClick}>Click me</button>
      <p>{data}</p>
    </div>
  );
};

const ParentComponent = () => {
  const [data, setData] = useState('Some data');
  const [count, setCount] = useState(0);

  // Memoize the props passed to ChildComponent
  const memoizedProps = useMemo(() => ({
    data,
    onClick: () => setCount(count + 1)
  }), [data, count]);

  return (
    <div>
      <ChildComponent {...memoizedProps} />
      <button onClick={() => setData('Updated data')}>Update Data</button>
    </div>
  );
};

export default ParentComponent