import axios from "axios"
const testparkdummyAPI = axios.create({
  baseURL: "https://testparkdummy2-45660.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return testparkdummyAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return testparkdummyAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return testparkdummyAPI.post(`/api/v1/signup/`, payload)
}
function modules_docusign_auth_token_retrieve(payload) {
  return testparkdummyAPI.get(`/modules/docusign/auth/token/`)
}
function modules_docusign_envelope_create_create(payload) {
  return testparkdummyAPI.post(`/modules/docusign/envelope/create/`)
}
function modules_docusign_envelope_download_retrieve(payload) {
  return testparkdummyAPI.get(`/modules/docusign/envelope/download/`)
}
function modules_docusign_envelope_retrieve_retrieve(payload) {
  return testparkdummyAPI.get(`/modules/docusign/envelope/retrieve/`)
}
function modules_docusign_envelope_retrieve_all_retrieve(payload) {
  return testparkdummyAPI.get(`/modules/docusign/envelope/retrieve-all/`)
}
function rest_auth_login_create(payload) {
  return testparkdummyAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return testparkdummyAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testparkdummyAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return testparkdummyAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testparkdummyAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return testparkdummyAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return testparkdummyAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return testparkdummyAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return testparkdummyAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testparkdummyAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return testparkdummyAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_docusign_auth_token_retrieve,
  modules_docusign_envelope_create_create,
  modules_docusign_envelope_download_retrieve,
  modules_docusign_envelope_retrieve_retrieve,
  modules_docusign_envelope_retrieve_all_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
