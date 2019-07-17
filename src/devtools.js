import * as devtools from 'react-devtools-core';
const rdt = (() => devtools.connectToDevTools({host: 'localhost', port: 8097}))()
export default rdt;

