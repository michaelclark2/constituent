import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
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
    const initiateAuthCommand = new InitiateAuthCommand({
      ClientId: Config.cognito.AWS_COGNITO_APP_CLIENT_ID,
      AuthFlow: "USER_PASSWORD_AUTH",
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    });
    return await this.sendCommand(initiateAuthCommand);
  }
}

export default new Cognito();
