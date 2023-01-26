// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";

import './App.scss'
import { Section } from "./components/Section/Section";
import { Input } from "./components/Input/Input";

function App() {
  return (
    <div className="app-test">
      <Section>
        <Input component="input" label="Test" required tooltip="Text"/>
      </Section>
    </div>
  )
}

export default App
