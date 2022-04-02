import React, {createRef, FunctionComponent, useEffect, useState} from 'react';

export interface GoogleCredentialResponse {
  credential: string;
}

interface GoogleButtonParams {
  onCredentialResponse: (response: GoogleCredentialResponse) => void;
}

// Inspired from: https://gist.github.com/pmckee11/13b1dffbf1d271a782ed7f65480b978f
const GoogleSignInButton: FunctionComponent<GoogleButtonParams> = ({onCredentialResponse}) => {
  const buttonRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (buttonRef.current) {
      (window as any).google.accounts.id.initialize({
        client_id: '1057836076662-ehncq8hs6n3jvaulecvvlejafgcfj04v.apps.googleusercontent.com',
        callback: onCredentialResponse,
      });
      (window as any).google.accounts.id.renderButton(buttonRef.current, {theme: 'outline', size: 'large'});
    }
  }, [buttonRef, onCredentialResponse]);
  return (
    <div ref={buttonRef}></div>
  );
};

export default GoogleSignInButton;