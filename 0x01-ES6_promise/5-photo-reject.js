export default function uploadPhoto(filename) {
  const fileName = filename;
  return Promise.reject(Error`${fileName} cannot be processed`);
}
