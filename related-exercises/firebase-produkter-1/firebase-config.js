export const firebaseProjectConfig = {
  apiKey: "AIzaSyCTniobcJ9e_XyHUsXYxmh7Y06EyG9ZAKk",
  authDomain: "firebase-rest-lesson-exercises.firebaseapp.com",
  projectId: "firebase-rest-lesson-exercises",
  appId: "1:31897236642:web:24cdd0335dd68c003993fb",
  databaseURL: "https://firebase-rest-lesson-exercises-default-rtdb.firebaseio.com",
};

export const productsPath = "products";
export const legacyFallbackPath = "";

const requiredConfigKeys = ["apiKey", "authDomain", "projectId", "appId", "databaseURL"];
const placeholder = "REPLACE_ME";

export const usingPlaceholderConfig = requiredConfigKeys.some((key) => {
  const value = firebaseProjectConfig[key];
  return typeof value !== "string" || !value.trim() || value.includes(placeholder);
});
