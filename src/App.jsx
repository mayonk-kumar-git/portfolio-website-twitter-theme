import "./App.css";
import NavBar from "./components/NavBar";
import MainSection from "./sections/MainSection";
import RightSection from "./sections/RightSection";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  return (
    <div className="flex flex-row">
      <div className="flex-auto hidden sm:block xl:min-w-[245px] md:basis-1/6 lg:basis-1/6 xl:basis-1/6">
        <NavBar />
      </div>
      <div className="flex-auto pb-20 sm:pb-0 border-x-2 border-gray-900 sm:min-w-[530px] min-h-screen md:basis-3/6 lg:basis-3/6 xl:basis-3/6">
        <MainSection />
      </div>
      <div className="flex-auto hidden md:block md:basis-2/6 lg:basis-2/6 xl:basis-2/6">
        <RightSection />
      </div>
      <MobileNavBar />
    </div>
  );
}

export default App;
