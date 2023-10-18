import { Navbar } from "./_components/navbar";

const MarketinLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketinLayout;
