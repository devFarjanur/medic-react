import { useState } from "react";
import DiscountBanner from "../Home/DiscountBanner";
import Drawer from "../Mobile/Drawer";
import Footer from "./Footers/Footer";
import HeaderTwo from "./Headers/Header";

export default function Layout({ children, childrenClasses }) {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Drawer open={drawer} action={() => setDrawer(!drawer)} />
      <div className="w-full overflow-x-hidden">
        <HeaderTwo drawerAction={() => setDrawer(!drawer)} />
        <div className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
          {children && children}
        </div>
        <DiscountBanner />
        <Footer />
      </div>
    </>
  );
}
