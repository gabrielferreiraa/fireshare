const apiUrls = {
  development: 'http://localhost:5000/dbfireshare/us-central1/api',
  production: 'https://us-central1-dbfireshare.cloudfunctions.net/api',
};

export default {
  url: apiUrls[process.env.NODE_ENV] || apiUrls.production,
};
