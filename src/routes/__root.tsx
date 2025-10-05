import { AppSidebar } from '@/components/Sidebar/AppSidebar';
import { SidebarProvider } from '@/components/ui/Sidebar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useTranslation } from 'react-i18next';

function RootComponent() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <SidebarProvider>
      <AppSidebar side={isRTL ? 'right' : 'left'} />
      <Outlet />
      <TanStackRouterDevtools />
    </SidebarProvider>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
