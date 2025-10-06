// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"; // you already have this
import Signup from "./pages/BuyerReg";
import Dashboard from "../src/pages/Farmerdashboard";
import CreateAccountPage from "./pages/CreateAccountPage";
import Upload from "../src/pages/Upload";

import "./App.css";

import BuyerDashboard from "./pages/BuyerDashboard";
import Overview from "./components/dashboard-components/Overview";

import FarmBusinessDetails from "./pages/FarmBusinessDetails";
import VerificationDetails from "./pages/VerificationDetails";
import BankingPayment from "./pages/BankingPayment";
import SignPage from "./pages/SigninPage";
import BuyerReg from "./pages/BuyerReg";
import SuccessPage from "./pages/SuccessPage";
import SignupHome from "./pages/SignupHome";

import VerificationCode from "./pages/VerificationCode";
import Marketplace from "./pages/MarketplacePage";
import CartPage from "./pages/CartPage";
import WalletPage from "./pages/WalletPage";
import PaymentDetailsPage from "./pages/PaymentdetailsPage";
import Withdrawal from "./pages/WithdrawalPage";
import OrderTracking from "./pages/OrderTracking";
import PaymentMethod from "./pages/PaymentMethodPage";
import BuyerPaymentAcceptance from "./pages/BuyerPaymentAcceptancePage";

// Example extra pages (create About.jsx, NotFound.jsx later)
//function About() {
//  return <h2>About Page</h2>;
//}

function NotFound() {
  return <h2>404 — Page Not Found</h2>;
}

function App() {
  return (
    <Router>
      {/* Navigation */}
      {/*<nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">Home</Link>
      </nav>*/}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signupHome" element={<SignupHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createaccount" element={<CreateAccountPage />} />

        <Route path="/buyerdashboard" element={<BuyerDashboard />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
        </Route>

        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/paymentdetails" element={<PaymentDetailsPage />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/paymentmethod" element={<PaymentMethod />} />
        <Route
          path="/buyerpaymentacceptance"
          element={<BuyerPaymentAcceptance />}
        />

        <Route path="/businessdetails" element={<FarmBusinessDetails />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="verifyd" element={<VerificationDetails />} />
        <Route path="bankingpayment" element={<BankingPayment />} />
        <Route path="farmer" element={<Dashboard />} />
        <Route path="signin" element={<SignPage />} />
        <Route path="buyerreg" element={<BuyerReg />} />
        <Route path="verificationcode" element={<VerificationCode />} />
        <Route path="successpage" element={<SuccessPage />} />
        <Route path="ordertracking" element={<OrderTracking />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
