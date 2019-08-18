const api = {
  async getNodes(url, className) {
    try {
      const response = await fetch(url);
      const html = await response.text();
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");
      let nodeList = doc.querySelectorAll(className);
      let arrayList = await Array.prototype.slice.call(nodeList);
      return arrayList;
    }
    catch (err) {
      console.log('Failed to fetch website: ', err);
    }
  }
}

export default api;