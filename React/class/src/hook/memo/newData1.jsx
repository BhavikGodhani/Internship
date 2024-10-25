// import React,{useState} from 'react'
import SimpleComponent from './newData';

// const NewData1 = () => {
//     const [count, setCount] = useState(0);

//     return (
//       <div>
//         <SimpleComponent name="Alice" />
//         <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       </div>
//     );
//   }

// export default NewData1

import React,{useState} from 'react'
import List from './newData';

const NewData1 = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2']);
    const [count, setCount] = useState(0);
    
    return (
      <div>
        <List items={items} />
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
    );
    
}

export default NewData1

