// @flow
export default class CustomWorker {
  constructor(url, token) {
    this.url = url;
    this.token = token;
    this.worker = null;
  }

  supportWorker() {
    const support = !!window.Worker;
    if (support) {
      this.worker = new Worker('test.js');
    }
    return support;
  }
}
