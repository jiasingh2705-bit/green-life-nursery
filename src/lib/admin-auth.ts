// Demo-only admin auth (local project). Replace with real server-side auth before going live.
const KEY = "gln_admin_session";

export function adminLogin(id: string, password: string) {
  if (id.trim() === "admin" && password === "1234") {
    sessionStorage.setItem(KEY, "1");
    return true;
  }
  return false;
}
export function isAdminLoggedIn() {
  return typeof window !== "undefined" && sessionStorage.getItem(KEY) === "1";
}
export function adminLogout() {
  sessionStorage.removeItem(KEY);
}
