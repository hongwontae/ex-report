import { useQuery } from "@tanstack/react-query";
import { PreMatchReportShowAPI } from "../../api/before-match/pre-match-all-report-api";
import type {
  PreMatchShowType,
  ItemsType,
} from "../../shared/types/before-match/PreMatchPreviewType";
import { useState } from "react";
import PreMatchPagingButton from "../../components/before-match/preMatch-show-components/PreMatchPagingButton";

function PreMatchReportViewer() {
  const [page, setPage] = useState<number>(1);

  const { data } = useQuery<PreMatchShowType<ItemsType>, Error>({
    queryKey: ["posts", page],
    queryFn: () => PreMatchReportShowAPI(page, 4),
  });

  if (!data) {
    return;
  }

  return (
    <>
      <PreMatchPagingButton
        totalPages={data.totalPages}
        page={page}
        setPage={setPage}
      ></PreMatchPagingButton>
    </>
  );
}

export default PreMatchReportViewer;
