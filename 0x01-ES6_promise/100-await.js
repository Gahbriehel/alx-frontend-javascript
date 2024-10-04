import { uploadPhoto, createUser } from "./utils";

export default async function UploadUser() {
  try {
    const user = await createUser();
    const photo = await uploadPhoto(user.photo);
    return { photo, user };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
