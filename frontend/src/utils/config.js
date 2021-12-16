class Config {
  cognito = {
    AWS_COGNITO_REGION: process.env.REACT_APP_COGNITO_REGION,
    AWS_COGNITO_ACCESS_ID: process.env.REACT_APP_AWS_ACCESS_ID,
    AWS_COGNITO_SECRET_ACCESS_KEY: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    AWS_COGNITO_APP_CLIENT_ID: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
    AWS_COGNITO_USER_POOL_ID: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    AWS_COGNITO_HOSTED_UI_DOMAIN:
      process.env.REACT_APP_AWS_COGNITO_HOSTED_UI_DOMAIN,
  };
}

export default new Config();
