import React from 'react'

const Childleft = ({data}) => {
  const parseData = JSON.parse(data);
  return (

    <div>
    <h1>Data Table</h1>
    <table>
        <thead>
            <tr>
                <th>Roll No</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {parseData.map((item, index) => (
                <tr key={index}>
                    <td>{item.rollNo}</td>
                    <td>{item.name}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default Childleft
