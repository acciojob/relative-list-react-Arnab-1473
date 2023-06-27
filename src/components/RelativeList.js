import React from 'react';

const RelativeList = () => {
  const relatives = ['John', 'Emily', 'Michael', 'Sophia'];

  return (
    <div>
      <h1>Relatives to Visit:</h1>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default RelativeList;
