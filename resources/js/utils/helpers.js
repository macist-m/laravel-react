import { format } from "date-fns";
import { tr } from "date-fns/locale";

export const formatDate = (date) => {
  return format(new Date(date), "dd/MM/yyyy HH:mm:ss");
};

export const formatDateFull = (date) => {
  return format(new Date(date), "dd  MMMM Y iiii", { locale: tr });
};
