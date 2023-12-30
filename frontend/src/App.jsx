import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Offers, ProfilePage, SignInPage } from "./pages";
import { Nav, Footer } from "./custom-components";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { useGoogleOneTapLogin, GoogleLogin } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="479942122946-hsp91a76hl7htl9rngvtiujh24hsibmf.apps.googleusercontent.com">
      <BrowserRouter>
        <main className="">
          <Nav />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<SignInPage />} />
            <Route path="/offers" element={<Offers />} />
            {/* path="/profile:id" */}
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
