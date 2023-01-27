export interface ResponseDTO {
  code: "error" | "success";
  message: string;
  data: any;
}