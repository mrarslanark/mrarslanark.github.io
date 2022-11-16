import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";

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

export const fetchSkillsFromDB = async () => {
  try {
    const q = query(collection(db, "skills"), orderBy("experience", "desc"));
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

export const fetchAccomplishmentsFromDB = async () => {
  try {
    const q = query(collection(db, "accomplishments"), orderBy("year", "desc"));
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
