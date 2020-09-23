import React from 'react';
import CustomWorker from '../../utils/customWorker';

function Home() {
  // const customWorker = new CustomWorker('https://jsonplaceholder.typicode.com/', 'WGDS');
  //
  // if (customWorker.supportWorker()) {
  //     customWorker.worker.addEventListener('message', function(e) {
  //         console.log(e.data);
  //     }, false);
  //     setTimeout(_ => {
  //         customWorker.worker.postMessage({'cmd': 'average', 'data': [1, 2, 3, 4]});
  //     },2000)
  // }

  return (
    <div className="App">
      Home
    </div>
  );
}

export default Home;
