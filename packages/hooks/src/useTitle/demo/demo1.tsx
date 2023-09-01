/**
 * title: 基础用法
 * desc: 设置页面标题
 */
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
