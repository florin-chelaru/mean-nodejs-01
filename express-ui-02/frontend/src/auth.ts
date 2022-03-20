import jwtDecode from "../node_modules/jwt-decode/build/jwt-decode.esm.js";

declare var google: {
	accounts: {
		id: {
			initialize: (config: any) => void;
			prompt: (callback: (notification: any) => void) => void;
			revoke: (email: string, callback: (done: any) => void) => void;
			renderButton: (parent: HTMLElement, options: any) => void;
		};
	};
};

interface CredentialResponse {
  clientId: string,
  credential: string,
  select_by: string
}

function handleCredentialResponse(response: CredentialResponse): void {
  console.log(response);

  const responsePayload = jwtDecode(response.credential);
  console.log(responsePayload);

  console.log("ID: " + responsePayload.sub);
  console.log('Full Name: ' + responsePayload.name);
  console.log('Given Name: ' + responsePayload.given_name);
  console.log('Family Name: ' + responsePayload.family_name);
  console.log("Image URL: " + responsePayload.picture);
  console.log("Email: " + responsePayload.email);
}

window.onload = () => {
  google.accounts.id.initialize({
    client_id: '1057836076662-ehncq8hs6n3jvaulecvvlejafgcfj04v.apps.googleusercontent.com',
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById('google-sign-in-button'),
    { theme: 'outline', size: 'large' }
  );
};
