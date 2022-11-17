require("dotenv").config();
const axios = require("axios");
const {
  query,
  collection,
  orderBy,
  getDocs,
  where,
} = require("firebase/firestore");
const fs = require("fs");
const { db } = require("./src/services/firebase");

function printMessage(message) {
  console.log("-------", message, "-------");
}

function checkDirAndStoreData(fileName, data) {
  const isDirectoryAvailable = fs.existsSync("src/data");
  if (!isDirectoryAvailable) {
    fs.mkdirSync("src/data");
  }
  fs.writeFileSync(`src/data/${fileName}.json`, JSON.stringify(data), {
    encoding: "utf-8",
  });
}

async function fetchArticles() {
  try {
    printMessage("STARTED FETCHING ARTICLES");
    const url =
      "https://public-api.wordpress.com/wp/v2/sites/arslanmushtaq.wordpress.com/posts";
    const { data } = await axios.get(url);
    printMessage("ARTICLES RETRIVED");
    const articles = data.map((blog) => {
      return {
        content: blog.content.rendered,
        createdAt: blog.date,
        excerpt: blog.excerpt.rendered,
        id: blog.slug,
        slug: blog.slug,
        title: blog.title.rendered,
        modified: blog.modified,
        featuredImage: blog.jetpack_featured_media_url,
      };
    });
    printMessage("WRITING ARTICLES LOCALLY");
    checkDirAndStoreData("articles", articles);
    printMessage("ARTICLES SUCCESSFULLY WRITTEN");
  } catch (err) {
    console.log("fetchArticles: ", err);
  }
}

async function fetchSkills() {
  try {
    console.log();
    printMessage("STARTED FETCHING SKILLS");
    const q = query(collection(db, "skills"), orderBy("experience", "desc"));
    const querySnapshot = await getDocs(q);
    const skills = querySnapshot.docs.map((skill) => {
      return { id: skill.id, ...skill.data() };
    });
    printMessage("SKILLS RETRIVED");
    printMessage("WRITING SKILLS LOCALLY");
    checkDirAndStoreData("skills", skills);
    printMessage("SKILLS SUCCESSFULLY WRITTEN");
  } catch (err) {
    console.log("fetchSkills:", err);
  }
}

async function fetchProjects() {
  try {
    console.log();
    printMessage("STARTED FETCHING PROJECTS");
    const q = query(collection(db, "projects"), where("released", "==", true));
    const querySnapshot = await getDocs(q);
    const projects = querySnapshot.docs.map((project) => {
      return { id: project.id, ...project.data() };
    });
    printMessage("PROJECTS RETRIVED");
    printMessage("WRITING PROJECTS LOCALLY");
    checkDirAndStoreData("projects", projects);
    printMessage("PROJECTS SUCCESSFULLY WRITTEN");
  } catch (err) {
    console.log("fetchProjects:", err);
  }
}

async function fetchAccomplishments() {
  try {
    console.log();
    printMessage("STARTED FETCHING ACCOOMPLISHMENTS");
    const q = query(collection(db, "accomplishments"), orderBy("year", "desc"));
    const querySnapshot = await getDocs(q);
    const accomplishments = querySnapshot.docs.map((project) => {
      return { id: project.id, ...project.data() };
    });
    printMessage("ACCOOMPLISHMENTS RETRIVED");
    printMessage("WRITING ACCOOMPLISHMENTS LOCALLY");
    checkDirAndStoreData("accomplishments", accomplishments);
    printMessage("ACCOOMPLISHMENTS SUCCESSFULLY WRITTEN");
  } catch (err) {
    console.log("fetchAccomplishments:", err);
  }
}

(async () => {
  await fetchArticles();
  await fetchSkills();
  await fetchProjects();
  await fetchAccomplishments();
})();
