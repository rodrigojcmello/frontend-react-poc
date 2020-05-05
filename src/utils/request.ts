function request<R>(url: string): Promise<R> {
  return fetch(url)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      }
      return Promise.reject(new Error(response.statusText));
    })
    .then((response) => response.json())
    .catch((error) => {
      // console.error(error);
      throw error;
    });
}

export default request;
