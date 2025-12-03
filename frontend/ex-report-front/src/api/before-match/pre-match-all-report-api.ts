import type {
  ItemsType,
  PreMatchShowType,
} from "../../shared/types/before-match/PreMatchPreviewType";

export const PreMatchReportShowAPI = async (
  page: number,
  limit: number
): Promise<PreMatchShowType<ItemsType>> => {
  const response = await fetch(
    `http://localhost:3000/pre-match/test/hello?page=${page}&limit=${limit}`,
    { method: "GET" }
  );

  if (!response.ok) {
    throw new Error("Error!");
  }

  const resData = await response.json();
  console.log(resData);
  return resData;
};
