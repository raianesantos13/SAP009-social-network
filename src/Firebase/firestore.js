import {
  collection, addDoc, getFirestore, getDocs,
} from 'firebase/firestore';
import { app } from './firebase.js';

const db = getFirestore(app);

export const addPosts = async (nomeUsuario, texto) => {
  addDoc(collection(db, 'posts'), {
    data: new Date(),
    nomeUsuario,
    texto,
  });
  return addPosts;
};

export const printPost = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  const posts = [];
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
    /* console.log(doc.id, ' => ', doc.data()); */
  });
  return posts;
};
