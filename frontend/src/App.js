// css
import './App.css';

//react-router-dom
import { Routes, Route } from "react-router-dom";

//file
import CompanyLogin from './Pages/CompanyLogin';
import CompanyProductManagement from './Pages/CompanyProductManagement';
import CompanyProductManagementAdd from './Pages/CompanyProductManagementAdd';
import CompanyProductManagementEdit from './Pages/CompanyProductManagementEdit';
import CompanySalesSummary from './Pages/CompanySalesSummary';
import CompanySalesHistory from './Pages/CompanySalesHistory';
import CompanySignup from './Pages/CompanySignUp';
import CustomerCart from './Pages/CustomerCart';
import CustomerLogin from './Pages/CustomerLogin';
import CustomerSignUp from './Pages/CustomerSignUp';
import CustomerOrderDetail from './Pages/CustomerOrderDetail';
import CustomerOrderHistory from './Pages/CustomerOrderHistory';
import CustomerPayment from './Pages/CustomerPayment';
import CustomerPurchase from './Pages/CustomerPurchase';
import CustomerShowProduct from './Pages/CustomerShowProduct';
import CompanySalesDetail from './Pages/CompanySalesDetail';
import Error from './Pages/Error';


function App() {
  return (
    < >
      <Routes>
        {/* company */}
        <Route path="/company/login" element={< CompanyLogin />} />
        <Route path="/company/signup" element={<CompanySignup />} />
        <Route path="/company/sales_summary" element={<CompanySalesSummary />} />
        <Route path="/company/sales_history" element={<CompanySalesHistory />} >
          <Route path=":id" element={<CompanySalesDetail />} />
        </Route>
        <Route path="/company/product_management" element={<CompanyProductManagement />} >
          <Route path="add" element={<CompanyProductManagementAdd />} />
          <Route path="edit" element={<CompanyProductManagementEdit />} />
        </Route>

        {/* customer */}
        <Route path="/customer/login" element={<CustomerLogin />} />
        <Route path="/customer/signup" element={<CustomerSignUp />} />
        <Route path="/customer/show_product" element={<CustomerShowProduct />} />
        <Route path="/customer/cart" element={<CustomerCart />} />
        <Route path="/customer/purchase" element={<CustomerPurchase />} />
        <Route path="/customer/payment_status" element={<CustomerPayment />} />
        <Route path="/customer/order_history" element={<CustomerOrderHistory />} >
          <Route path=":id" element={<CustomerOrderDetail />} />
        </ Route >


        {/* Error */}
        <Route path="*" element={<Error />} />


      </Routes>
    </ >
  );
}

export default App;
