import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.conf";

const healthcareAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default healthcareAuthentication;