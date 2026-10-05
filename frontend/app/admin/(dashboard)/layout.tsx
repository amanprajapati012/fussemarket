import AdminGuard from "@/app/src/admin/components/AdminGuard";
import AdminSidebar from "@/app/src/admin/components/AdminSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminGuard>
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </AdminGuard>
  );
}
