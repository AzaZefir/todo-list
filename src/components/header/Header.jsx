import React from 'react';

export const Header = ({ result, listsItem }) => {
  return (
    <h1>
      TODO LIST ({result}/{listsItem.length})
    </h1>
  );
};
