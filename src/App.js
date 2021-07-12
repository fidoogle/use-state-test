import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {!show &&
        <button data-testid="btn-show" onClick={() => setShow(true)}
        >
          Show it
        </button>
      }
      {show && <div data-testid="new-div">
        My new div
        <button data-testid="btn-hide" onClick={() => setShow(false)}>Hide it</button>
      </div>}
    </>
  );
}

export default App;
