import { VALID_SERVICES } from '@/constants/service';

export const validUrlChecker = (inputUrl: string) => {
  return VALID_SERVICES.some((service) => {
    return inputUrl.startsWith(service.domain);
  });
};

export const extractServiceName = (inputUrl: string) => {
  const service = VALID_SERVICES.find((service) => {
    return inputUrl.startsWith(service.domain);
  });
  return service?.name;
};
