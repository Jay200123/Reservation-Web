type ServiceState = {
  service_name: string;
  service_price: number;
};

type ServiceActions = {
  serviceNameFilter: (service_name: string) => void;
  servicePriceFilter: (service_price: number) => void;
};

type useServiceFilterSlice = ServiceState & ServiceActions;

export type { useServiceFilterSlice };
