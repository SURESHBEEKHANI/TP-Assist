import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { AIAssistant } from "@/components/AIAssistant";

const CalendarPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <AIAssistant />
      
      <main className="ml-64 mr-96 pt-16">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Calendar</h1>
          <p className="text-muted-foreground">View all your trips and events in calendar view.</p>
        </div>
      </main>
    </div>
  );
};

export default CalendarPage;
