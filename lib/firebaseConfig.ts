import { initializeApp, getApp, FirebaseOptions } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  where,
  getDocs,
  query,
  limit,
  collectionGroup,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

// Google analytics
// const analytics = getAnalytics(app)

// Auth exports
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();
export const facebookAuthProvider = new FacebookAuthProvider();

// Firestore exports
export const firestore = getFirestore(firebaseApp);

// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGE = "state_changed";

// Helper functions

/**
 * Gets a users/{uid} document with username
 * @param {string} username
 */
export async function getUserWithUsername(username: string): Promise<any> {
  // userRef = collection("user")
  // const query = userRef.where("username", "==", username).limit(1)

  const q = query(
    collection(firestore, "users"),
    where("username", "==", username),
    limit(1)
  );
  const userDoc = (await getDocs(q)).docs[0];
  return userDoc;
}

/**
 * Convert a fireStore document to JSON
 * @param {DocumentSnapShot} doc
 */

export function postToJSON(doc: any) {
  const data = doc.data();
  return {
    ...data,
    // firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    // createdAt: data?.createdAt.toMillis() || 0,
    // updatedAt: data?.updatedAt.toMillis() || 0,
  };
}

/**
 * Gets a provinces/{province} document with province
 * @param {string} canteen
 */
export async function getPostsWithCanteen(canteen: string) {
  // querying data from provinces doc by searching for province field
  // const q = query(
  //   collection(firestore, "canteens"),
  //   where("canteen", "==", canteen)
  //   // limit(1)
  // );

  const q2 = query(
    collectionGroup(firestore, "menu"),
    where("canteen", "==", canteen)
    // limit(1)
  );

  const menu = await getDocs(q2);
  // const canteenDocs = (await getDocs(q2)).docs[0];
  const canteenDocs = await getDocs(q2);
  // console.log(`[getPostsWithCanteen] query: ${JSON.stringify(q)}`);
  console.log(`[getPostsWithCanteen] menu: ${menu}`);

  // console.log(
  //   `[getPostsWithCanteen] canteenDocs2: ${JSON.stringify(canteenDocs2)}`
  // );
  // menu.forEach((m) => {
  //   console.log(`m.data: ${JSON.stringify(m.data())}`);
  // });
  return canteenDocs;
}
