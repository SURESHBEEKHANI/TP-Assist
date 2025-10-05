import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { AIAssistant } from "@/components/AIAssistant";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <AIAssistant />
      
      <main className="ml-64 mr-96 pt-16">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences.</p>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
