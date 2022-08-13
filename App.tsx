import * as React from 'react';
import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import './style.css';

export default function App() {
  const renderCountRef = useRef(1);
  const isOdd = renderCountRef.current % 2 !== 0;
  const [count, setCount] = useState(0);
  useEffect(() => {
    renderCountRef.current++;
  }, [count]);
  const result = count * 2 + 1;
  const handleChange = () => setCount(count + 1);
  const RenderCount = ({ data }) => {
    return <i>{data}</i>;
  };

  return (
    <div>
      <ul onClick={handleChange}>
        {isOdd && (
          <li>
            count是: <RenderCount data={count} />
          </li>
        )}
        <li>
          result是: <RenderCount data={result} />
        </li>
      </ul>
    </div>
  );
}
