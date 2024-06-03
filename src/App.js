import React, {useEffect} from "react";
import alanBtn from '@alan-ai/alan-sdk-web'

const ajKey = 'adcafd1fb6f76c301ff0460a1aa7e0db2e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {

  useEffect(() => {
    alanBtn({
      key: ajKey,
      onCommand: ( { command } ) => {
        if(command === 'testCommand'){
          alert('This code was executed');
        }
      }
    })
  }, [])

  return (
    <div>
     <h1>AJ's AI News Application</h1>
    </div>
  );
}

export default App;
