import type { Image } from "./image";

type Services = {
  _id: string;
  service_name: string;
  service_price: number;
  description: string;
  duration: string;
  image: Image[];
  createdAt: Date;
  updatedAt: Date;
};

// Represents the response structure returned when retrieving multiple services.
// Typically used in Promise callbacks or API responses.
type ServicesResponse = {
  /** HTTP status code of the response */
  status: number;

  /** Array containing multiple service records */
  details: Services[];

  /** Message describing the result of the operation */
  message: string;
};

// Represents the response structure returned when retrieving a single service.
// Typically used in Promise callbacks or API responses.
type ServiceResponse = {
  /** HTTP status code of the response */
  status: number;

  /** Object containing a single service record */
  details: Services;

  /** Message describing the result of the operation */
  message: string;
};

type ServiceActions = {
  getAllServices: (skip: number, limit: number) => Promise<ServicesResponse>;
  getServiceById: (id: string) => Promise<ServiceResponse>;
  addService: (data: FormData) => Promise<ServiceResponse>;
  updateServiceById: (id: string, data: FormData) => Promise<ServiceResponse>;
  getUserServices: (
    service_name: string,
    service_price: number,
    skip: number,
    limit: number
  ) => Promise<ServicesResponse>;
};

type useServiceApi = ServiceActions;

export type { Services, useServiceApi };
