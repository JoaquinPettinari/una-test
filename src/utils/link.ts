export function validateUrl(url: string) {
  const regex =
    /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.(com|ar|edu\.ar|unahur\.edu\.ar)(\/\S*)?$/;
  return regex.test(url);
}
