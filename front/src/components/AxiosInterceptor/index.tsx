import { ReactNode, useEffect, useState } from "react";
import { ErrorPopUp } from "../ErrorPopUp";
import { api } from "../../services/api";
import axios from "axios";

interface AxiosInterceptorProps {
  children: ReactNode;
}

export const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const errorInterceptor = (error: Error) => {
      if (!axios.isAxiosError(error)) return Promise.reject(error);

      if (error.response?.status === 401) setIsOpenModal(true);

      return Promise.reject(error);
    };
    const interceptor = api.interceptors.response.use(null, errorInterceptor);

    return () => api.interceptors.response.eject(interceptor);
  }, []);

  return (
    <>
      {isOpenModal && (
        <ErrorPopUp toggleModal={() => setIsOpenModal(!isOpenModal)} />
      )}
      {children}
    </>
  );
};
