import firebase from 'firebase'

const FIREBASE_AUTH_PROVIDERS = {
    GOOGLE: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    EMAIL: firebase.auth.EmailAuthProvider.PROVIDER_ID
}
export default FIREBASE_AUTH_PROVIDERS