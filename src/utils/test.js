self.addEventListener('message', (e) => {
  const { data } = e;
  switch (data.cmd) {
    case 'average':
      self.postMessage({ a: 4 });
      break;
    default:
      self.postMessage('Unknown command');
  }
}, false);
