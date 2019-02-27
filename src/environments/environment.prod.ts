export const environment = {
  production: true
};

export let APIURL = "";

switch (window.location.hostname) {
  // this is the deployed angular application
  case "asc-streamline-client.herokuapp.com":
    // this is the full url of your deployed API
    APIURL = "https://asc-redbadge-streamline.herokuapp.com";
    break;
  default:
    // this is the local host name of your API
    APIURL = "http://localhost:4000";
  //APIURL = "https://asc-streamline-server.herokuapp.com";
}
