import React,{useState,useMemo} from 'react'

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


  export default ParentComponent;



  /////////////////////filter the input data
//   const data = [
//      { id: 1, name: 'Alice', age: 25 },
//      { id: 2, name: 'Bob', age: 30 },
//      { id: 3, name: 'Charlie', age: 35 },
//      { id: 4, name: 'David', age: 40 },
//    ];
//  const [filter, setFilter] = useState('');

//  // Memoize the filtered items
//  const filteredItems = useMemo(() => {
//    return data.filter(item => item.name.includes(filter));
//  }, [data, filter]);

//  return (
//    <div>
//      <input
//        type="text"
//        value={filter}
//        onChange={(e) => setFilter(e.target.value)}
//        placeholder="Filter items"
//      />
//      <ul>
//        {filteredItems.map(item => <li key={item.id}>{item.name}</li>)}
//      </ul>
//    </div>
//  );
// };