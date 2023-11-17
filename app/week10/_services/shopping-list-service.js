import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const itemsCol = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(itemsCol);
    const items = [];
    itemsSnapshot.forEach((doc) => {
        items.push({ id: doc.id, data: doc.data(), name: doc.data().name, quantity: doc.data().quantity, unit: doc.data().unit });
    });
    return items;
}

export async function addItem(userId, item) {
    const itemsCol = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCol, item);
    return docRef.id;
}