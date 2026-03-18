import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { AboutPage } from "./pages/AboutPage";
import { BookTestDrivePage } from "./pages/BookTestDrivePage";
import { CarDetailsPage } from "./pages/CarDetailsPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { InventoryPage } from "./pages/InventoryPage";

const queryClient = new QueryClient();

// Root layout
const rootRoute = createRootRoute({
  component: () => (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(135deg, #0B0F12 0%, #141A1E 100%)",
      }}
    >
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppFloat />
      <Toaster richColors position="top-right" />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const inventoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/inventory",
  component: InventoryPage,
});

const carDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/inventory/$id",
  component: CarDetailsPage,
});

const bookTestDriveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/book-test-drive",
  component: BookTestDrivePage,
  validateSearch: (search: Record<string, unknown>) => ({
    carId: search.carId as string | undefined,
  }),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  inventoryRoute,
  carDetailsRoute,
  bookTestDriveRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
