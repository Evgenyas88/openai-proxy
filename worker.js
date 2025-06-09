export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "api.openai.com";
    return fetch(new Request(url, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow",
    }));
  }
};
