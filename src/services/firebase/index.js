import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const {
  REACT_APP_FIREBASE_PROJECTS,
  REACT_APP_FIREBASE_SKILLS,
  REACT_APP_FIREBASE_ACCOMPLISHMENTS,
} = process.env;

export const fetchProjectsFromDB = async () => {
  try {
    const q = query(
      collection(db, REACT_APP_FIREBASE_PROJECTS),
      where("released", "==", true)
    );
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
    const q = query(
      collection(db, REACT_APP_FIREBASE_SKILLS),
      orderBy("experience", "desc")
    );
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
    const q = query(
      collection(db, REACT_APP_FIREBASE_ACCOMPLISHMENTS),
      orderBy("year", "desc")
    );
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
