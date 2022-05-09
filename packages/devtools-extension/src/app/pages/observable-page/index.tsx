import { useRoute } from '@lib/store-router';
import { router } from '@app/store/router';
import React from 'react';

export function ObservablePage() {
  const route = useRoute(router);
  console.log(route);
  return (
    <div>
      <span>Observable Page</span>
      <span>params:</span>
      <pre>
        <code>{JSON.stringify(route?.params, null, 2)}</code>
      </pre>
    </div>
  );
}
