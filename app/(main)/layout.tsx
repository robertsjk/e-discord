import NavigationSidebar from "@/components/navigation/navigation-sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="inset-y-0 w-16 hidden md:flex flex-col fixed z-30">
        <NavigationSidebar />
      </div>
      <main className="md:pl-16 h-full bg-background text-foreground">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
