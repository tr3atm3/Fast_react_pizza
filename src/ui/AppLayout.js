import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Content</h1>
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
