import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import Pillars from "./pages/Pillars";
import Conference from "./pages/Conference";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import RedirectConference from "./pages/RedirectConference";
import AbujaDeclaration from "./pages/AbujaDeclaration";
import WhoShouldAttend from "./pages/WhoShouldAttend";
import Founder from "./pages/Founder";
import GetInvolved from "./pages/GetInvolved";
import Partner from "./pages/Partner";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Tende from "./pages/Tende";
import JoinTende from "./pages/JoinTende";
import Media from "./pages/Media";
import Auth from "./pages/Auth";
import AdminMedia from "./pages/AdminMedia";
import AdminSubmissions from "./pages/AdminSubmissions";
import Unsubscribe from "./pages/Unsubscribe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/pillars" element={<Pillars />} />
          <Route path="/webinar" element={<RedirectConference />} />
          <Route path="/conference" element={<RedirectConference />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/abuja-declaration" element={<AbujaDeclaration />} />
          <Route path="/who-should-attend" element={<WhoShouldAttend />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tende" element={<Tende />} />
          <Route path="/join-tende" element={<JoinTende />} />
          <Route path="/media" element={<Media />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/media" element={<AdminMedia />} />
          <Route path="/admin/submissions" element={<AdminSubmissions />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;