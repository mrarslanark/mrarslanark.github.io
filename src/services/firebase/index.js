import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchCollection = async (collectionName) => {
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
