import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export async function subscribeEmail(email: string): Promise<{ success: boolean; message: string }> {
  if (!email) {
    return { success: false, message: "Please enter an email" };
  }

  try {
    const docRef = doc(db, "subscribers", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { success: false, message: "This email is already subscribed." };
    }

    await setDoc(docRef, {
      email,
      subscribedAt: new Date(),
    });

    return { success: true, message: "Thanks for subscribing!" };
  } catch (error) {
    console.error("Error subscribing email:", error);
    return { success: false, message: "Failed to subscribe. Please try again." };
  }
}
