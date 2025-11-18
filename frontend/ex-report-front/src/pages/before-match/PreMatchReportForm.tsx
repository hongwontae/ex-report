import PreMatchCoverImageInput from "../../components/before-match/PreMatchCoverImageInput";
import PreMatchTitleInput from "../../components/before-match/PreMatchTitleInput";

function PreMatchReportForm() {
  return (
    <>
      <section className="h-full w-full grid grid-rows-3 pl-4">
        <div className="flex flex-col gap-4">
          <PreMatchTitleInput></PreMatchTitleInput>
          <PreMatchCoverImageInput>Cover-Image</PreMatchCoverImageInput>
        </div>
      </section>
    </>
  );
}

export default PreMatchReportForm;
