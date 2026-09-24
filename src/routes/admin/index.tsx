import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard, Package, ShoppingCart, Users, Boxes, BarChart3, MessageSquare, Bell, Settings, LogOut,
  Leaf, Menu, X, IndianRupee, AlertTriangle, TrendingUp,
} from "lucide-react";
import { adminLogout, isAdminLoggedIn } from "@/lib/admin-auth";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Green Life Nursery" },
      { name: "description", content: "Green Life Nursery admin dashboard for products, orders and stock." },
      { property: "og:title", content: "Admin Dashboard — Green Life Nursery" },
      { property: "og:description", content: "Manage the Green Life Nursery store." },
      { name: "robots", content: "noindex" },
    ],
  }),
  beforeLoad: () => {
    if (!isAdminLoggedIn()) throw redirect({ to: "/admin/login" });
  },
  component: AdminDashboard,
});

const NAV = [
  { key: "Dashboard", icon: LayoutDashboard },
  { key: "Products", icon: Package },
  { key: "Orders", icon: ShoppingCart },
  { key: "Customers", icon: Users },
  { key: "Inventory", icon: Boxes },
  { key: "Sales & Reports", icon: BarChart3 },
  { key: "Enquiries", icon: MessageSquare },
  { key: "Notifications", icon: Bell },
  { key: "Settings", icon: Settings },
] as const;
type Section = (typeof NAV)[number]["key"];

const PRODUCTS = [
  { name: "Monstera Deliciosa", cat: "Indoor", price: 899, stock: 24 },
  { name: "Fiddle Leaf Fig", cat: "Indoor", price: 1299, stock: 4 },
  { name: "Snake Plant", cat: "Indoor", price: 499, stock: 38 },
  { name: "Echeveria Succulent", cat: "Succulents", price: 299, stock: 3 },
  { name: "Terracotta Pot 8\"", cat: "Pots", price: 349, stock: 6 },
  { name: "Bougainvillea", cat: "Outdoor", price: 599, stock: 17 },
];
const ORDERS = [
  { id: "#GL-1048", customer: "Ananya Sharma", date: "24 Sep 2026", total: 1798, status: "Pending" },
  { id: "#GL-1047", customer: "Rohan Mehta", date: "23 Sep 2026", total: 499, status: "Shipped" },
  { id: "#GL-1046", customer: "Priya Nair", date: "23 Sep 2026", total: 2647, status: "Delivered" },
  { id: "#GL-1045", customer: "Karan Patel", date: "22 Sep 2026", total: 899, status: "Delivered" },
  { id: "#GL-1044", customer: "Sneha Iyer", date: "21 Sep 2026", total: 648, status: "Cancelled" },
];
const CUSTOMERS = [
  { name: "Ananya Sharma", email: "ananya@example.com", orders: 6, spent: 8420 },
  { name: "Rohan Mehta", email: "rohan@example.com", orders: 2, spent: 1398 },
  { name: "Priya Nair", email: "priya@example.com", orders: 9, spent: 14210 },
  { name: "Karan Patel", email: "karan@example.com", orders: 3, spent: 2697 },
];
const SALES = [
  { m: "Apr", v: 42 }, { m: "May", v: 58 }, { m: "Jun", v: 71 }, { m: "Jul", v: 64 }, { m: "Aug", v: 86 }, { m: "Sep", v: 93 },
];
const ENQUIRIES = [
  { name: "Meera Joshi", subject: "Bulk order for office plants", date: "24 Sep" },
  { name: "Arjun Rao", subject: "Repotting clinic timings", date: "22 Sep" },
  { name: "Divya Kapoor", subject: "Yellow leaves on my fiddle fig", date: "21 Sep" },
];
const NOTES = [
  "Fiddle Leaf Fig stock is below 5 units.",
  "New order #GL-1048 received from Ananya Sharma.",
  "New enquiry from Meera Joshi.",
];

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
const lowStock = PRODUCTS.filter((p) => p.stock < 10);

function AdminDashboard() {
  const navigate = useNavigate();
  const [section, setSection] = useState<Section>("Dashboard");
  const [open, setOpen] = useState(false);

  const logout = () => {
    adminLogout();
    navigate({ to: "/admin/login", replace: true });
  };

  return (
    <div className="flex min-h-screen bg-muted/40">
      {open && <div className="fixed inset-0 z-30 bg-foreground/30 lg:hidden" onClick={() => setOpen(false)} />}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-primary text-primary-foreground transition-transform lg:static lg:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full",
      )}>
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6" />
            <div>
              <p className="font-display text-lg font-semibold leading-none">Green Life</p>
              <p className="text-xs opacity-70">Admin Panel</p>
            </div>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(false)} aria-label="Close menu"><X className="h-5 w-5" /></button>
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {NAV.map(({ key, icon: Icon }) => (
            <button key={key} onClick={() => { setSection(key); setOpen(false); }}
              className={cn("flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition",
                section === key ? "bg-primary-foreground/15 font-medium" : "opacity-80 hover:bg-primary-foreground/10 hover:opacity-100")}>
              <Icon className="h-4 w-4" /> {key}
            </button>
          ))}
        </nav>
        <div className="p-3">
          <button onClick={logout} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm opacity-80 hover:bg-primary-foreground/10 hover:opacity-100">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b bg-card px-4 py-3 sm:px-8">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu className="h-5 w-5" /></button>
            <h1 className="font-display text-2xl text-foreground">{section}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setSection("Notifications")} className="relative rounded-full p-2 hover:bg-muted" aria-label="Notifications">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
            </button>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary font-medium text-secondary-foreground">A</div>
              <div className="hidden text-sm sm:block">
                <p className="font-medium leading-none text-foreground">Admin</p>
                <p className="text-xs text-muted-foreground">Store Manager</p>
              </div>
            </div>
            <button onClick={logout} className="hidden items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm text-foreground hover:bg-muted sm:flex">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </header>

        <main className="flex-1 space-y-6 p-4 sm:p-8">
          {section === "Dashboard" && <Overview />}
          {section === "Products" && <Table cols={["Product", "Category", "Price", "Stock"]} rows={PRODUCTS.map((p) => [p.name, p.cat, inr(p.price), p.stock])} />}
          {section === "Orders" && <OrdersTable />}
          {section === "Customers" && <Table cols={["Name", "Email", "Orders", "Total spent"]} rows={CUSTOMERS.map((c) => [c.name, c.email, c.orders, inr(c.spent)])} />}
          {section === "Inventory" && <Table cols={["Product", "Stock", "Status"]} rows={PRODUCTS.map((p) => [p.name, p.stock, <StockBadge key={p.name} n={p.stock} />])} />}
          {section === "Sales & Reports" && <SalesChart />}
          {section === "Enquiries" && <Table cols={["From", "Subject", "Date"]} rows={ENQUIRIES.map((e) => [e.name, e.subject, e.date])} />}
          {section === "Notifications" && (
            <Card title="Latest notifications">
              <ul className="divide-y">{NOTES.map((n) => <li key={n} className="flex items-center gap-3 py-3 text-sm text-foreground"><Bell className="h-4 w-4 text-accent" />{n}</li>)}</ul>
            </Card>
          )}
          {section === "Settings" && (
            <Card title="Store settings">
              <dl className="grid gap-4 text-sm sm:grid-cols-2">
                {[["Store name", "Green Life Nursery"], ["Currency", "Indian Rupee (₹)"], ["Admin ID", "admin"], ["Role", "Store Manager"]].map(([k, v]) => (
                  <div key={k}><dt className="text-muted-foreground">{k}</dt><dd className="font-medium text-foreground">{v}</dd></div>
                ))}
              </dl>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}

function Overview() {
  const stats = [
    { label: "Total Products", value: "1,248", icon: Package },
    { label: "Total Orders", value: "3,562", icon: ShoppingCart },
    { label: "Total Customers", value: "2,104", icon: Users },
    { label: "Total Sales", value: inr(1842300), icon: IndianRupee },
  ];
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border bg-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{label}</p>
              <div className="rounded-lg bg-secondary p-2 text-secondary-foreground"><Icon className="h-4 w-4" /></div>
            </div>
            <p className="mt-3 font-display text-3xl text-foreground">{value}</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-primary"><TrendingUp className="h-3 w-3" /> +8.2% this month</p>
          </div>
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2"><SalesChart /></div>
        <Card title="Low stock products">
          <ul className="divide-y">
            {lowStock.map((p) => (
              <li key={p.name} className="flex items-center justify-between py-3 text-sm">
                <span className="flex items-center gap-2 text-foreground"><AlertTriangle className="h-4 w-4 text-accent" />{p.name}</span>
                <span className="font-medium text-destructive">{p.stock} left</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <OrdersTable title="Recent orders" />
    </>
  );
}

function SalesChart() {
  const max = Math.max(...SALES.map((s) => s.v));
  return (
    <Card title="Sales overview (₹ thousands)">
      <div className="flex h-56 items-end gap-3 sm:gap-6">
        {SALES.map((s) => (
          <div key={s.m} className="flex flex-1 flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">{s.v}k</span>
            <div className="w-full rounded-t-md bg-primary/80" style={{ height: `${(s.v / max) * 170}px` }} />
            <span className="text-xs text-muted-foreground">{s.m}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

const STATUS: Record<string, string> = {
  Pending: "bg-accent/15 text-accent",
  Shipped: "bg-secondary text-secondary-foreground",
  Delivered: "bg-primary/10 text-primary",
  Cancelled: "bg-destructive/10 text-destructive",
};
function OrdersTable({ title }: { title?: string }) {
  return (
    <Table title={title} cols={["Order", "Customer", "Date", "Total", "Status"]}
      rows={ORDERS.map((o) => [o.id, o.customer, o.date, inr(o.total),
        <span key={o.id} className={cn("rounded-full px-2.5 py-1 text-xs font-medium", STATUS[o.status])}>{o.status}</span>])} />
  );
}
function StockBadge({ n }: { n: number }) {
  return n < 10
    ? <span className="rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-medium text-destructive">Low stock</span>
    : <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">In stock</span>;
}
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border bg-card p-5">
      <h2 className="mb-4 font-display text-lg text-foreground">{title}</h2>
      {children}
    </section>
  );
}
function Table({ title, cols, rows }: { title?: string; cols: string[]; rows: React.ReactNode[][] }) {
  return (
    <Card title={title ?? "All records"}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead><tr className="border-b text-muted-foreground">{cols.map((c) => <th key={c} className="pb-3 font-medium">{c}</th>)}</tr></thead>
          <tbody className="divide-y">
            {rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className="py-3 text-foreground">{c}</td>)}</tr>)}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
