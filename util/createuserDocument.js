import { db } from "../firebase/firebaseInitialize";
import {
  doc,
  document,
  onSnapshot,
  query,
  collection,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

export const createuserDocument = async (user, additionalData) => {
  if (!user) return;

  const { uid } = user;
  const userRef = doc(db, "users", uid);

  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { email } = user;
    const { displayName } = user;
    const { photoURL } = user;
    const { uid } = user;
    const splitName = displayName.split(" ");
    const firstName = splitName[0];
    const lastName = splitName[1] ? splitName.slice(1).join(" ") : " ";
    const applications = ["youtube", "spotify"];

    try {
      const data = {
        uid,
        displayName,
        email,
        photoURL,
        firstName,
        lastName,
        applications,
        createdAt: Date.now().toString(),
      };
      await setDoc(userRef, data);
    } catch (err) {
      console.log(err);
    }
  }
};
