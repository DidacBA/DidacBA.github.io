const api = {
  async getWebAsync(website) {
    try {
      const response = await fetch(website);
      const html = await response.text();
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");
      let linksNodeList = doc.querySelectorAll('.post-link');
      let arrayLinkList = await Array.prototype.slice.call(linksNodeList);
      return arrayLinkList;
    }
    catch (err) {
      console.log('Failed to fetch website: ', err);
    }
  }
}

export default api;