import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import AuthProvider
import { AuthProvider } from "./context/AuthContext"; // You'll create this context
import FurnitureRentalServices from "./Sub_Services/Shifting/FurnitureRentalServices";

// Maintenance Services Imports
import HandymanService from "./Sub_Services/Maintenance/HandymanService";
import ElectricService from "./Sub_Services/Maintenance/ElectricService";
import Painting from "./Sub_Services/Maintenance/Painting";
import FlooringService from "./Sub_Services/Maintenance/FlooringServices";
import SmartHomeIntegration from "./Sub_Services/Maintenance/SmartHomeIntegration";
import ConnectWithProvider from "./pages/ConnectWithProvider.js";
import BookingComponent from "./components/BookingComponent.js";

// Import Authentication Pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Profile = lazy(() => import("./pages/Profile"));
const connectProvider = lazy(() => import("./pages/connectProvider"));


// Cleaning
const ResidentialCleaning = lazy(() => import('./Sub_Services/Cleaning/ResidentialCleaning'));
const GardenCleaning = lazy(() => import('./Sub_Services/Cleaning/GardenCleaning'));
const CarpetAndUpholsteryCleaning = lazy(() => import('./Sub_Services/Cleaning/CarpetAndUpholstery'));
const SpecialtyFloorCare = lazy(() => import('./Sub_Services/Cleaning/SpecialityFloorResponse'));
const WaterTankCleaning = lazy(() => import('./Sub_Services/Cleaning/watertank'));
const CurtainCleaning = lazy(() => import('./Sub_Services/Cleaning/CurtainCleaning'));
const SofaCleaning = lazy(() => import('./Sub_Services/Cleaning/SofaCleaning'));
const AirDuctCleaning = lazy(() => import('./Sub_Services/Cleaning/AirDuctCleaning'));
const OdorRemoval = lazy(() => import('./Sub_Services/Cleaning/OdorRemovalServices'));

// Lazy Loaded Components
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Main = lazy(() => import("./components/Main"));
const ServiceSlider = lazy(() => import("./components/Slider"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Become = lazy(() => import("./components/Become"));
const Get = lazy(() => import("./components/Get"));
const Contact = lazy(() => import("./components/Contact"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const WhatsAppIcon = lazy(() => import("./components/WhatsAppIcon"));
const YouTubeIcon = lazy(() => import("./components/YouTubeIcon"));

// Lazy Load Service Components
const Beauty = lazy(() => import("./Sub_Services/Beauty"));
const Catering = lazy(() => import("./Sub_Services/Catering"));
const Cleaning = lazy(() => import("./Sub_Services/Cleaning"));
const Clinical = lazy(() => import("./Sub_Services/Clinical"));
const Gardening = lazy(() => import("./Sub_Services/Gardening"));
const HomeSecurity = lazy(() => import("./Sub_Services/HomeSecurity"));
const Maintenance = lazy(() => import("./Sub_Services/Maintenance"));
const PestControl = lazy(() => import("./Sub_Services/PestControl"));
const Renovation = lazy(() => import("./Sub_Services/Renovation"));
const Shifting = lazy(() => import("./Sub_Services/Shifting"));
const Solar = lazy(() => import("./Sub_Services/Solar"));
const Washing = lazy(() => import("./Sub_Services/Washing"));

// Shifting Sub-Services
const LongDistanceMoving = lazy(() => import("./Sub_Services/Shifting/LongDistanceMoving"));
const PetRelocation = lazy(() => import("./Sub_Services/Shifting/PetRelocation"));
const SpecialItemsMoving = lazy(() => import("./Sub_Services/Shifting/SpecialItemsMoving"));
const VehicleTransport = lazy(() => import("./Sub_Services/Shifting/VehicleTransport"));
const LocalResidentialMoving = lazy(() => import("./Sub_Services/Shifting/LocalResidentialMoving"));

// Maintenance Sub-Service Routes
const ApplianceRepair = lazy(() => import("./Sub_Services/Maintenance/ApplianceRepair"));
const HomeInspection = lazy(() => import("./Sub_Services/Maintenance/HomeInspection"));
const RoofingAndGutterServices = lazy(() => import("./Sub_Services/Maintenance/RoofingAndGutterServices"));
const ACMaintenance = lazy(() => import("./Sub_Services/Maintenance/ACMaintenance"));

// Renovation Sub-Service Routes
const WholeHouseRenovation = lazy(() => import("./Sub_Services/renovation/WholeHouseRenovation"));
const KitchenRemodeling = lazy(() => import("./Sub_Services/renovation/kitchenRemodeling"));
const BathroomRenovation = lazy(() => import("./Sub_Services/renovation/BathroomRenovation"));
const FlooringInstallation = lazy(() => import("./Sub_Services/renovation/flooringInstallation"));
const InteriorPainting = lazy(() => import("./Sub_Services/renovation/InteriorPaintingAndWallpapering"));
const WindowsAndDoorsReplacement = lazy(() => import("./Sub_Services/renovation/WindowsAndDoorReplacement"));

// Lazy load components
const EventCatering = lazy(() => import('./Sub_Services/Catering/EventCatering'));
const CorporateCatering = lazy(() => import('./Sub_Services/Catering/CorporateCatering'));
const MealDelivery = lazy(() => import('./Sub_Services/Catering/MealDeliveryServices'));
const FoodTrucks = lazy(() => import('./Sub_Services/Catering/FoodStationsAndFoodTrucks'));
const FarmToTable = lazy(() => import('./Sub_Services/Catering/FarmToTableCatering'));
const CulinaryExperiences = lazy(() => import('./Sub_Services/Catering/InteractiveCulinaryServices'));

// Lazy load the service pages
const CarWashingAndDetailing = lazy(() => import('./Sub_Services/Washing/CarWashingAndDetailing'));
const LaundryServices = lazy(() => import('./Sub_Services/Washing/LaundryServices'));
const SolarPanelCleaning = lazy(() => import('./Sub_Services/Washing/SolarPanelCleaning'));
const TileandGroutCleaning = lazy(() => import('./Sub_Services/Washing/TileandGroutCleaning'));
const WindowCleaning = lazy(() => import('./Sub_Services/Washing/WindowCleaning'));
const GutterCleaning = lazy(() => import('./Sub_Services/Washing/GutterCleaning'));

// Lazy-loaded components
const PrimaryCareServices = lazy(() => import('./Sub_Services/Clinical/PrimaryCareServices'));
const TelemedicineServices = lazy(() => import('./Sub_Services/Clinical/TeleMedicineServices'));
const ChronicDiseaseManagement = lazy(() => import('./Sub_Services/Clinical/ChronicDiseaseManagement'));
const VaccinationClinics = lazy(() => import('./Sub_Services/Clinical/VaccinationClinics'));
const MentalHealthServices = lazy(() => import('./Sub_Services/Clinical/MentalHealthServices'));
const DiagnosticImagingServices = lazy(() => import('./Sub_Services/Clinical/DiagnosticImagingServices'));
const PharmacyServices = lazy(() => import('./Sub_Services/Clinical/PharmacyServices'));
const CorporateHealthAndOccupationalMedicine = lazy(() => import('./Sub_Services/Clinical/CorporateHealthAndOccupationalMedicine'));
const PediatricClinics = lazy(() => import('./Sub_Services/Clinical/PediatricClinics'));

const SolarPanelInstallation = lazy(() => import('./Sub_Services/Solar/SolarPannelInstallation'));
const SolarMaintenanceAndRepair = lazy(() => import('./Sub_Services/Solar/SolarMaintenanceAndRepair'));
const EnergyAuditsAndConsultation = lazy(() => import('./Sub_Services/Solar/EnergyAuditsAndConsultation.js'));
const SolarBatteryStorageSolutions = lazy(() => import('./Sub_Services/Solar/SolarBatteryStorageSolutions.js'));
const SolarFinancingAndLeasing = lazy(() => import('./Sub_Services/Solar/SolarFinancingAndLeasing.js'));
const SolarMonitoringSystems = lazy(() => import('./Sub_Services/Solar/SolarMonitoringSystems.js'));

// Lazy load the components
const GardenInstallationAndPlanning = lazy(() => import('./Sub_Services/Gardening/GardenInstallattionAndPlanning.js'));
const GardenLightingInstallation = lazy(() => import('./Sub_Services/Gardening/GardenLightingInstallation.js'));
const GardenMaintenance = lazy(() => import('./Sub_Services/Gardening/GardenMaintenance.js'));
const MosquitoControl = lazy(() => import('./Sub_Services/Gardening/MosquitoControl.js'));
const TreeCareAndArboriculture = lazy(() => import('./Sub_Services/Gardening/TreeCareAndArboricuture.js'));
const WildlifeControl = lazy(() => import('./Sub_Services/Gardening/wildLifeControl.js'));

// Loading Spinner Component
function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

// Home Component
function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <ServiceSlider />
      <About />
      <Services />
      <Become />
      <Get />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <WhatsAppIcon />
      <YouTubeIcon />
    </>
  );
}

// Main App Component
function App() {
  return (
    <div>
    
        <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Authentication Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
              

              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/Slider" element={<ServiceSlider />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Become" element={<Become />} />

               {/* Booking Route */}
               <Route path="/booking" element={<BookingComponent />} /> {/* Add this line */}

              {/* Protected Route */}
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                {/* Add other protected routes here */}
              </Route>

              {/* 404 Not Found Route */}
              <Route
                path="*"
                element={
                  <div className="container text-center mt-5">
                    <h1>404 - Page Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                  </div>
                }
              />

              {/* Service Routes */}
              <Route path="/Beauty" element={<Beauty />} />
              <Route path="/Catering" element={<Catering />} />
              <Route path="/Cleaning" element={<Cleaning />} />
              <Route path="/Clinical" element={<Clinical />} />
              <Route path="/Gardening" element={<Gardening />} />
              <Route path="/Home_Security" element={<HomeSecurity />} />
              <Route path="/Maintenance" element={<Maintenance />} />
              <Route path="/PestControl" element={<PestControl />} />
              <Route path="/Renovation" element={<Renovation />} />
              <Route path="/Shifting" element={<Shifting />} />
              <Route path="/Solar" element={<Solar />} />
              <Route path="/Washing" element={<Washing />} />
              <Route path="/connect" element={<ConnectWithProvider />} />

              {/* Shifting Sub-Service Routes */}
              <Route path="/Shifting/long-distance-moving" element={<LongDistanceMoving />} />
              <Route path="/Shifting/pet-relocation" element={<PetRelocation />} />
              <Route path="/Shifting/special-items-moving" element={<SpecialItemsMoving />} />
              <Route path="/Shifting/vehicle-transport" element={<VehicleTransport />} />
              <Route path="/Shifting/LocalResidentialMoving" element={<LocalResidentialMoving />} />
              <Route path="/Shifting/furniture-rental-services" element={<FurnitureRentalServices />} />

              {/* Maintenance Sub-Service Routes */}
              <Route path="/Maintenance/handyman-service" element={<HandymanService />} />
              <Route path="/Maintenance/electric-service" element={<ElectricService />} />
              <Route path="/Maintenance/flooring-services" element={<FlooringService />} />
              <Route path="/Maintenance/appliance-repair" element={<ApplianceRepair />} />
              <Route path="/Maintenance/painting" element={<Painting />} />
              <Route path="/Maintenance/smart-home-integration" element={<SmartHomeIntegration />} />
              <Route path="/Maintenance/home-inspection" element={<HomeInspection />} />
              <Route path="/Maintenance/roofing-and-gutter-services" element={<RoofingAndGutterServices />} />
              <Route path="/Maintenance/ac-maintenance" element={<ACMaintenance />} />

              {/* Cleaning Routes */}
              <Route path="/Cleaning/residential-cleaning" element={<ResidentialCleaning />} />
              <Route path="/Cleaning/garden-cleaning" element={<GardenCleaning />} />
              <Route path="/Cleaning/carpet-and-upholstery" element={<CarpetAndUpholsteryCleaning />} />
              <Route path="/Cleaning/speciality-floor-care" element={<SpecialtyFloorCare />} />
              <Route path="/Cleaning/water-tank-cleaning" element={<WaterTankCleaning />} />
              
              <Route path="/Cleaning/curtain-cleaning" element={<CurtainCleaning />} />
              <Route path="/Cleaning/sofa-cleaning" element={<SofaCleaning />} />
              <Route path="/Cleaning/air-duct-cleaning" element={<AirDuctCleaning />} />
              <Route path="/Cleaning/odor-removal-services" element={<OdorRemoval />} />

              {/* Solar Service Routes */}
              <Route path="/solar" element={<Solar />} />
              <Route path="/solar/panel-installations" element={<SolarPanelInstallation />} />
              <Route path="/solar/maintenance-and-repair" element={<SolarMaintenanceAndRepair />} />
              <Route path="/solar/energy-audits-and-consultations" element={<EnergyAuditsAndConsultation />} />
              <Route path="/solar/battery-storage-solutions" element={<SolarBatteryStorageSolutions />} />
              <Route path="/solar/financing-and-leasing" element={<SolarFinancingAndLeasing />} />
              <Route path="/solar/monitoring-systems" element={<SolarMonitoringSystems />} />

              {/* Washing Routes */}
              <Route path="/washing/car-washing" element={<CarWashingAndDetailing />} />
              <Route path="/washing/laundry-services" element={<LaundryServices />} />
              <Route path="/washing/window-cleaning" element={<WindowCleaning />} />
              <Route path="/washing/gutter-cleaning" element={<GutterCleaning />} />
              <Route path="/washing/tile-grout-cleaning" element={<TileandGroutCleaning />} />
              <Route path="/washing/solar-panel-cleaning" element={<SolarPanelCleaning />} />

              {/* Gardening Routes */}
              <Route path="/gardening/garden-installation" element={<GardenInstallationAndPlanning />} />
              <Route path="/gardening/garden-lighting" element={<GardenLightingInstallation />} />
              <Route path="/gardening/garden-maintenance" element={<GardenMaintenance />} />
              <Route path="/gardening/mosquito-control" element={<MosquitoControl />} />
              <Route path="/gardening/tree-care" element={<TreeCareAndArboriculture />} />
              <Route path="/gardening/wildlife-control" element={<WildlifeControl />} />

              {/* Catering Routes */}
              <Route path="/catering/event-catering" element={<EventCatering />} />
              <Route path="/catering/corporate-catering" element={<CorporateCatering />} />
              <Route path="/catering/meal-delivery" element={<MealDelivery />} />
              <Route path="/catering/food-trucks" element={<FoodTrucks />} />
              <Route path="/catering/farm-to-table" element={<FarmToTable />} />
              <Route path="/catering/culinary-experiences" element={<CulinaryExperiences />} />

              {/* Clinical Routes */}
              <Route path="/clinical/primary-care-services" element={<PrimaryCareServices />} />
              <Route path="/clinical/tele-medicine-services" element={<TelemedicineServices />} />
              <Route path="/clinical/chronic-disease-management" element={<ChronicDiseaseManagement />} />
              <Route path="/clinical/vaccination-clinics" element={<VaccinationClinics />} />
              <Route path="/clinical/mental-health-services" element={<MentalHealthServices />} />
              <Route path="/clinical/diagnostic-imaging-services" element={<DiagnosticImagingServices />} />
              <Route path="/clinical/pharmacy-services" element={<PharmacyServices />} />
              <Route path="/clinical/corporate-health-and-occupational-medicine" element={<CorporateHealthAndOccupationalMedicine />} />
              <Route path="/clinical/pediatric-clinics" element={<PediatricClinics />} />

              {/* Renovation Routes */}
              <Route path="/Sub_services/renovation/whole-house" element={<WholeHouseRenovation />} />
              <Route path="/Sub_services/renovation/kitchen-remodeling" element={<KitchenRemodeling />} />
              <Route path="/Sub_services/renovation/bathroom-renovation" element={<BathroomRenovation />} />
              <Route path="/Sub_services/renovation/flooring-installation" element={<FlooringInstallation />} />
              <Route path="/Sub_services/renovation/interior-painting" element={<InteriorPainting />} />
              <Route path="/Sub_services/renovation/window-and-door-replacement" element={<WindowsAndDoorsReplacement />} />
            </Routes>
          </Suspense>
          </AuthProvider>
        </BrowserRouter>
      
    </div>
  );
}

export default App;