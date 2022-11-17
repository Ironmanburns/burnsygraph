// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const config = {
  appId: `${process.env.REACT_APP_CLIENT_ID}`,
  redirectUri: `${process.env.REACT_APP_REDIRECT_URL}`,
  authority: `https://login.microsoftonline.com/${process.env.REACT_APP_TENANT_ID}`,
  scopes: [
    'user.read',
    'mailboxsettings.read',
    'calendars.readwrite'
  ]
};

export default config;
