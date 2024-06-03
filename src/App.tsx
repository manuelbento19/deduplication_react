import { useState } from 'react';
import * as Schenario from './scenarios'

function App() {
  const [activeScenario,setActiveSchenario] = useState(1);
  
  return (
    <div>
      <h1>This is the posts list, trying to avoid the deduplication</h1>
      <h3>Schenario</h3>
      <ul style={{display: 'flex',alignItems: 'center',gap: 10}}>
        {Array.from({length: 6}).map((_,index)=><a onClick={()=>setActiveSchenario(index+1)} href={`#scenario${index+1}`} key={index}>Scenario {index+1}</a>)}
      </ul>
      <hr />
      {activeScenario==1 && <Schenario.Scenario1/>}
      {activeScenario==2 && <Schenario.Scenario2/>}
      {activeScenario==3 && <Schenario.Scenario3/>}
      {activeScenario==4 && <Schenario.Scenario4/>}
      {activeScenario==5 && <Schenario.Scenario5/>}
      {activeScenario==6 && <Schenario.Scenario6/>}
    </div>
  )
}

export default App
