import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  Landing,
  LawyerRegister,
  Offers,
  ProfilePage,
  RdvForm,
  ReviewPage,
  SearchResult,
  SignInPage,
  LawyerDashboard,
} from "./pages";
import { Nav, Footer } from "./custom-components";
import { GoogleOAuthProvider } from "@react-oauth/google";

const MainContent = () => {
  const location = useLocation();
  const hideOnRoutes = ["/compte", "/compte/avocat"];

  return (
    <main>
      {!hideOnRoutes.includes(location.pathname) && <Nav />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register/:plan" element={<SignInPage />} />
        <Route path="/offers" element={<Offers />} />
        {/* path="/profile:id" */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search/:input" element={<SearchResult />} />
        <Route path="/rdv" element={<RdvForm />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/compte" element={<LawyerRegister />} />
        {/* path="/avocat:id" */}
        <Route path="/compte/avocat" element={<LawyerDashboard />} />
      </Routes>

      {!hideOnRoutes.includes(location.pathname) && <Footer />}
    </main>
  );
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId="479942122946-hsp91a76hl7htl9rngvtiujh24hsibmf.apps.googleusercontent.com">
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
