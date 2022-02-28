const config = {
  apiToken: process.env.NETBOX_API_TOKEN,
  baseURL: process.env.NETBOX_BASE_URL,
  apiBaseURL: process.env.NETBOX_BASE_URL + "/api",
  ldapUrl: process.env.LDAP_URL,
  ldapAdminDn: process.env.LDAP_BIND_DN,
  ldapAdminPassword: process.env.LDAP_BIND_PASSWORD,
  ldapUserSearchBase: process.env.LDAP_USER_SEARCH_BASE,
  ldapUsernameAttribute: process.env.LDAP_USERNAME_ATTRIBUTE,
  ldapUserDisplayNameAttribute: process.env.LDAP_USER_DISPLAY_NAME_ATTRIBUTE,
};

export default config;
