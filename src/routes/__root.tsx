import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider } from '@/components/ui/Sidebar';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

function RootComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Outlet />
      <TanStackRouterDevtools />
    </SidebarProvider>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
