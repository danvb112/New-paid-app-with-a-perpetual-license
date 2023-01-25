// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

import {Header} from "./components/Header/Header";

function App() {
  return (
    <div className="app-test">
      <Header 
        title="Test"
        description="Description Test"
      />
    </div>
  )
}

export default App
