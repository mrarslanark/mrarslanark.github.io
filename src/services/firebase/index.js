import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchCollectionFromDB = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = [];
    for (const doc of querySnapshot.docs) {
      data.push({ id: doc.id, ...doc.data() });
    }
    return data;
  } catch (err) {
    throw err;
  }
};

export const fetchProjectsFromDB = async () => {
  try {
    const q = query(collection(db, "projects"), where("released", "==", true));
    const querySnapshot = await getDocs(q);
    const data = [];
    for (const doc of querySnapshot.docs) {
      data.push({ id: doc.id, ...doc.data() });
    }
    return data;
  } catch (err) {
    throw err;
  }
};
