function isAdmin(localStorage: Storage, setAdmin: (a: boolean) => void) {
  const admin = localStorage?.getItem("testAdmin");
  if (admin === "true") setAdmin(true);
  if (admin !== "true") setAdmin(false);
}

export default isAdmin;
