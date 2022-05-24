import {
  CognitoIdentityProviderClient,
  GlobalSignOutCommand,
  InitiateAuthCommand,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import Config from "../utils/config";

const client = new CognitoIdentityProviderClient({
  region: Config.cognito.AWS_COGNITO_REGION,
  credentials: {
    accessKeyId: Config.cognito.AWS_COGNITO_ACCESS_ID,
    secretAccessKey: Config.cognito.AWS_COGNITO_SECRET_ACCESS_KEY,
  },
});

class Cognito {
  client = client;

  async sendCommand(command) {
    return await this.client.send(command);
  }

  async login({ username, password }) {
    const loginCommand = new InitiateAuthCommand({
      ClientId: Config.cognito.AWS_COGNITO_APP_CLIENT_ID,
      AuthFlow: "USER_PASSWORD_AUTH",
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    });
    return await this.sendCommand(loginCommand);
  }

  async signup({ username, password, street, city, state, zipcode }) {
    const signUpCommand = new SignUpCommand({
      ClientId: Config.cognito.AWS_COGNITO_APP_CLIENT_ID,
      Username: username,
      Password: password,
      UserAttributes: [
        {
          Name: "address",
          Value: `${street} ${city}, ${state} ${zipcode}`,
        },
        {
          Name: "custom:state",
          Value: state,
        },
      ],
    });
    return await this.sendCommand(signUpCommand);
  }

  async refreshToken(token) {
    const refreshTokenCommand = new InitiateAuthCommand({
      ClientId: Config.cognito.AWS_COGNITO_APP_CLIENT_ID,
      AuthFlow: "REFRESH_TOKEN_AUTH",
      AuthParameters: {
        REFRESH_TOKEN: token,
      },
    });
    return await this.sendCommand(refreshTokenCommand);
  }

  async logout(accessToken) {
    const signOutCommand = new GlobalSignOutCommand({
      AccessToken: accessToken,
    });
    return await this.sendCommand(signOutCommand);
  }
}

export default new Cognito();
