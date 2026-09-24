import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Leaf, Lock, User, AlertCircle } from "lucide-react";
import { adminLogin, isAdminLoggedIn } from "@/lib/admin-auth";

export const Route = createFileRoute("/admin/login")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin Login — Green Life Nursery" },
      { name: "description", content: "Secure staff sign-in for the Green Life Nursery admin panel." },
      { property: "og:title", content: "Admin Login — Green Life Nursery" },
      { property: "og:description", content: "Staff sign-in for the Green Life Nursery admin panel." },
      { name: "robots", content: "noindex" },
    ],
  }),
  beforeLoad: () => {
    if (isAdminLoggedIn()) throw Route.redirect({ to: "/admin" });
  },
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(id, pw)) navigate({ to: "/admin", replace: true });
    else setError("Invalid Admin ID or password. Please try again.");
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden flex-col justify-between bg-primary p-12 text-primary-foreground lg:flex">
        <div className="flex items-center gap-2">
          <Leaf className="h-7 w-7" />
          <span className="font-display text-2xl font-semibold">Green Life Nursery</span>
        </div>
        <div>
          <h1 className="font-display text-5xl leading-tight">Tend the nursery,<br /><em>behind the scenes.</em></h1>
          <p className="mt-4 max-w-md opacity-80">Manage plants, orders, customers and stock from one calm, organised place.</p>
        </div>
        <p className="text-sm opacity-60">© {new Date().getFullYear()} Green Life Nursery · Staff only</p>
      </div>
      <div className="flex items-center justify-center bg-background p-6">
        <form onSubmit={submit} className="w-full max-w-sm rounded-2xl border bg-card p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-2 text-primary lg:hidden">
            <Leaf className="h-6 w-6" />
            <span className="font-display text-xl font-semibold">Green Life Nursery</span>
          </div>
          <h2 className="font-display text-3xl text-foreground">Admin sign in</h2>
          <p className="mt-1 text-sm text-muted-foreground">Enter your credentials to access the dashboard.</p>

          {error && (
            <div role="alert" className="mt-5 flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> {error}
            </div>
          )}

          <label className="mt-6 block text-sm font-medium text-foreground" htmlFor="aid">Admin ID</label>
          <div className="relative mt-1.5">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input id="aid" value={id} onChange={(e) => { setId(e.target.value); setError(""); }} autoComplete="username" required
              className="w-full rounded-lg border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="admin" />
          </div>

          <label className="mt-4 block text-sm font-medium text-foreground" htmlFor="apw">Password</label>
          <div className="relative mt-1.5">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input id="apw" type={show ? "text" : "password"} value={pw} onChange={(e) => { setPw(e.target.value); setError(""); }} autoComplete="current-password" required
              className="w-full rounded-lg border bg-background py-2.5 pl-9 pr-10 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="••••" />
            <button type="button" onClick={() => setShow((s) => !s)} aria-label={show ? "Hide password" : "Show password"}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground">
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          <button type="submit" className="mt-6 w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
