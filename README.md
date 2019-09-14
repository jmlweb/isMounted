# isMounted

## ⚛ hook to check if your component is still mounted

Changing the state in an unmounted component will result in an error like this:

```
Warning: Can only update a mounted or mounting component. This usually means you called setState, replaceState, or forceUpdate on an unmounted component. This is a no-op.
```

But in some cases (promises derived from an api call, timeouts or intervals...) it's impossible to know if the component is still mounted or not.

😎 Use this hook and avoid errors

```jsx
import React, { useState, useEffect } from 'react';
import useIsMounted from 'ismounted';
import myService from './myService';
import Loading from './Loading';
import ResultsView from './ResultsView';

const MySecureComponent = () => {
  const isMounted = useIsMounted();
  const [results, setResults] = useState(null);

  useEffect(() => {
    myService.getResults().then(val => {
      if (isMounted.current) {
        setResults(val);
      }
    });
  }, [myService.getResults]);

  return results ? <ResultsView results={results} /> : <Loading />;
};

export default MySecureComponent;
```
