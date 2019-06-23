import config from "../config";

const queryParams = params =>
  Object.keys(params)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");

const fetchJSON = options => async url => {
  if (options.queryParams) {
    url +=
      (url.indexOf("?") === -1 ? "?" : "&") + queryParams(options.queryParams);
    delete options.queryParams;
  }

  const response = await fetch(url, { ...options });
  if (response.ok) return response.json();
};

const options = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: "Bearer " + config.API_READ_ACCESS_TOKEN
  },
  queryParams: {
    api_key: config.API_KEY
  }
};

const get = (url, queryParams={})  => fetchJSON({
  method: "GET",
  headers: {...options.headers},
  queryParams: {...options.queryParams, ...queryParams}
})(url);

const post = (url, json) =>
  fetchJSON({
    method: "POST",
    body: JSON.stringify(json),
    ...options
  })(url);

export default { get, post };
