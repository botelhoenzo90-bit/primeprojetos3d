import { useEffect, useState } from "react";
import { getPromotionDate } from "@/lib/promotion-date";

const UrgencyBar = () => {
  const [today, setToday] = useState(() => getPromotionDate());

  useEffect(() => {
    const updateDate = () => setToday(getPromotionDate());
    const interval = window.setInterval(updateDate, 30_000);
    window.addEventListener("focus", updateDate);
    document.addEventListener("visibilitychange", updateDate);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", updateDate);
      document.removeEventListener("visibilitychange", updateDate);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-topbar py-2.5 px-3 shadow-md">
      <p className="text-center text-primary-foreground font-black text-[11px] md:text-sm uppercase tracking-wide">
        Oferta Promocional Válida até ({today})
      </p>
    </div>
  );
};
export default UrgencyBar;
