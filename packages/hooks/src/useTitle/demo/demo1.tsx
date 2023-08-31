import useTitle from '..';
import React from 'react';

export default () => {
  useTitle('自定义标题');
  return (
    <div>
      <p>Set title of the page.</p>
    </div>
  );
};
