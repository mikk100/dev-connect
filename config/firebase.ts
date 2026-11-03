import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCIoEJW_mXkpcLPGxC_bDIHijEtSZ4Nxm4",
   authDomain: "dev-connect-2221c.firebaseapp.com",
  projectId: "dev-connect-2221c",
  storageBucket: "dev-connect-2221c.firebasestorage.app",
  messagingSenderId: "1033956052154",
  appId: "1033956052154:web:2e159aca4033b770c7c683"
};

const app = initializeApp(firebaseConfig);
// Export Firestore database instance to use across your app
export const db = getFirestore(app);

