import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase.js';

export function addPosts(valorDoInput) {
  addDoc(collection(db, 'posts'), {
    post: valorDoInput,

  });
}
