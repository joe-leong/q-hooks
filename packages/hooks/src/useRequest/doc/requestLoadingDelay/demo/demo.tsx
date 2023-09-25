import { useRequest } from '@fe-q/q-react-hooks';
import Mock from 'mockjs';
import React from 'react';

function getUserName(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 200);
  });
}

export default () => {
  const action = useRequest(getUserName);

  const withLoadingDelayAction = useRequest(getUserName, {
    loadingDelay: 300,
  });

  const trigger = () => {
    action.run();
    withLoadingDelayAction.run();
  };

  return (
    <div>
      <button type="button" onClick={trigger}>
        run
      </button>

      <div style={{ margin: '24px 0', width: 300 }}>
        Username: {action.loading ? 'Loading...' : action.data}
      </div>
      <div>
        Username: {withLoadingDelayAction.loading ? 'Loading...' : withLoadingDelayAction.data}
      </div>
    </div>
  );
};
