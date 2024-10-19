import React from 'react';

interface ModelProps {
  name: string;
  age: number;
}

const Model: React.FC<ModelProps> = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </div>
  );
};

export default Model;