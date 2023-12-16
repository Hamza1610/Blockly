import { BlocklyWorkspace } from 'react-blockly';
import {useState} from 'react'
import toolbox from './toolbox';
// import toolbox from './toolbox_min.json.json';
import './App.css';

function BlocklyBoard() {
  const [xml, setXml] = useState();

  return (
    <BlocklyWorkspace
      className="board" // you can use whatever classes are appropriate for your app's CSS
      toolboxConfiguration={toolbox} // this must be a JSON toolbox definition
      initialXml={xml}
      onXmlChange={setXml}
    />
  )
}

export default BlocklyBoard;