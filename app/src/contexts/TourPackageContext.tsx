"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface TourPackageData {
  tourTitle: string;
  duration: string;
  price: string;
  priceTerm: string;
  priceNote: string;
  itineraryTitle: string;
  itinerarySubtitle: string;
  itineraryRoute: string;
  days: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

const defaultData: TourPackageData = {
  tourTitle: "",
  duration: "",
  price: "",
  priceTerm: "per person",
  priceNote: "* Cost for private tour with twin/double sharing room",
  itineraryTitle: "",
  itinerarySubtitle: "",
  itineraryRoute: "",
  days: [],
  inclusions: [],
  exclusions: [],
};

interface TourContextType {
  data: TourPackageData;
  setData: (data: Partial<TourPackageData>) => void;
  updatePricing: (
    pricing: Partial<
      Pick<
        TourPackageData,
        "tourTitle" | "duration" | "price" | "priceTerm" | "priceNote"
      >
    >,
  ) => void;
  updateItinerary: (
    itinerary: Partial<
      Pick<
        TourPackageData,
        "itineraryTitle" | "itinerarySubtitle" | "itineraryRoute" | "days"
      >
    >,
  ) => void;
  updateInclusionsExclusions: (
    incExc: Partial<Pick<TourPackageData, "inclusions" | "exclusions">>,
  ) => void;
  addDay: (day: ItineraryDay) => void;
  removeDay: (index: number) => void;
  resetData: () => void;
  isLoaded: boolean;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

const STORAGE_KEY = "tourPackageData";

export function TourProvider({ children }: { children: ReactNode; }) {
  const [data, setDataState] = useState<TourPackageData>(defaultData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          console.log("📦 Loaded from localStorage:", parsed);
          setDataState(parsed);
        } catch (e) {
          console.error("❌ Error loading from localStorage:", e);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      console.log("💾 Saving to localStorage:", data);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data, isLoaded]);

  const setData = (newData: Partial<TourPackageData>) => {
    console.log("📝 Setting data:", newData);
    setDataState((prev) => ({ ...prev, ...newData }));
  };

  const updatePricing = (
    pricing: Partial<
      Pick<
        TourPackageData,
        "tourTitle" | "duration" | "price" | "priceTerm" | "priceNote"
      >
    >,
  ) => {
    console.log("💰 Updating pricing:", pricing);
    setDataState((prev) => ({ ...prev, ...pricing }));
  };

  const updateItinerary = (
    itinerary: Partial<
      Pick<
        TourPackageData,
        "itineraryTitle" | "itinerarySubtitle" | "itineraryRoute" | "days"
      >
    >,
  ) => {
    console.log("🗺️ Updating itinerary:", itinerary);
    setDataState((prev) => ({ ...prev, ...itinerary }));
  };

  const updateInclusionsExclusions = (
    incExc: Partial<Pick<TourPackageData, "inclusions" | "exclusions">>,
  ) => {
    console.log("📋 Updating inc/exc:", incExc);
    setDataState((prev) => ({ ...prev, ...incExc }));
  };

  const addDay = (day: ItineraryDay) => {
    console.log("➕ Adding day:", day);
    setDataState((prev) => ({
      ...prev,
      days: [...prev.days, day],
    }));
  };

  const removeDay = (index: number) => {
    setDataState((prev) => ({
      ...prev,
      days: prev.days.filter((_, i) => i !== index),
    }));
  };

  const resetData = () => {
    console.log("🔄 Resetting data");
    setDataState(defaultData);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  console.log("📊 Current context data:", data);

  return (
    <TourContext.Provider
      value={{
        data,
        setData,
        updatePricing,
        updateItinerary,
        updateInclusionsExclusions,
        addDay,
        removeDay,
        resetData,
        isLoaded,
      }}
    >
      {children}
    </TourContext.Provider>
  );
}

export function useTour() {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error("useTour must be used within TourProvider");
  }
  return context;
}
