import type { FormData } from "./exec-form-data-type";
export interface EventQuestionsProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
