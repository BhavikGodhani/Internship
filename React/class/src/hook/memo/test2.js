// import React,{memo} from 'react'

//  function Test2(props) {
//     console.warn("Test Component",props.name);
//   return (
//     <div>
//       <h1>Home Component</h1>
//     </div>
//   )
// }

// export default memo(Test2)

// import React from 'react';

// const ExpensiveComponent = React.memo(({ number }) => {
//   const expensiveCalculation = (num) => {
//     for (let i = 0; i < 1000000000; i++) {}
//     return num * 2;
//   };

//   return <div>Result: {expensiveCalculation(number)}</div>;
// });

// export default ExpensiveComponent;

import React from 'react';

const ListItem = React.memo(({ item, onClick }) => {
  console.log('Rendering:', item);
  return <li onClick={() => onClick(item)}>{item}</li>;
});

function Test2() {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item} item={item} onClick={setSelectedItem} />
      ))}
      <div>Selected Item: {selectedItem}</div>
    </ul>
  );
}

export default Test2
