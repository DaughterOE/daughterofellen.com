import { Navigate } from "react-router-dom";
import { useIsAdmin } from "@/hooks/useAuth";

const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAdmin, loading, user } = useIsAdmin();
  if (loading) {
    return (
      <main className="pt-32 pb-24 text-center text-muted-foreground">
        Loading...
      </main>
    );
  }
  if (!user) return <Navigate to="/auth" replace />;
  if (!isAdmin) {
    return (
      <main className="pt-32 pb-24 text-center">
        <h1 className="font-heading text-2xl text-foreground">Access denied</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Your account does not have admin access. Contact info@daughterofellen.org.
        </p>
      </main>
    );
  }
  return <>{children}</>;
};

export default AdminGuard;
