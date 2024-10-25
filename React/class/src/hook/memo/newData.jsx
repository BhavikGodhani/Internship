import { log10 } from 'chart.js/helpers';
import React, { memo } from 'react';

// const  SimpleComponent = memo(({ name }) => {
//     console.log('MemoizedComponent render');
//     return <div>{name}</div>;
//   });
//   export default SimpleComponent    


const ListItem = React.memo(({ item }) => {
  console.log(
    "gj11"
  );
  return <li>{item}</li>;
});

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default List
