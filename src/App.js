import React, { useRef, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { Keyboard, KeyboardLayout, KeyboardButton } from '@ncr-design-system/keyboard-react'



function App() {

  const appRef = useRef(null);

  const onKeyboardAction = useCallback((event) => {

    const action = event.detail;
    if (action === 'enter') {
      // preform submit
      document.activeElement.closest('form').submit();
    }
  });

  useEffect(() => {
    appRef.current.addEventListener('keyboardActionDispatch', onKeyboardAction);

    return () => { appRef.current.removeEventListener('keyboardActionDispatch', onKeyboardAction) }
  }, []);

  return (
    <div className="App" ref={appRef}>
      <header className="App-header">
        <form>
          <div>
            <input className="global-keyboard" type='text' />
          </div>
          <div>
            <input className="global-keyboard" type='text' />
          </div>
        </form>
        <Keyboard global={true} maxWidth='100%' autoOpenClose >
          <KeyboardLayout layout='condensedNumpad' language='english' minHeight='300px' />
        </Keyboard>
      </header>
    </div>
  );
}

export default App;
