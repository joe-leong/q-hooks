/**
 * title: 基础用法
 * desc: 设置页面标题
 */
import React from 'react';
import { useTitle } from 'q-hooks';

export default () => {
  useTitle('自定义标题');
  return (
    <div>
      <p>Set title of the page.</p>
    </div>
  );
};
