import React from 'react';

import { useSelector } from 'react-redux'

import { selectUserName } from '../store/user/user.selector'

const Book = () => {
  const userName = useSelector(selectUserName)

  return (
    <div>
      Book of: {userName}
    </div>
  );
};

export default Book;