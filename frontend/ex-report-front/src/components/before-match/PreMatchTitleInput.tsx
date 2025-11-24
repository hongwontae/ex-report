import { useTitleStore } from "../../store/pre-match-store/title-store";

function PreMatchTitleInput() {
  const title = useTitleStore(({ title }) => title);
  const setTitle = useTitleStore(({ setTitle }) => setTitle);

  return (
    <>
      <div className="w-full">
        <input
          type="text"
          className="peer w-full text-3xl font-bold border-b-2 border-gray-300 
                    focus:border-b-blue-500 outline-none pt-6 pb-2"
          value={title}
          onChange={(e) => {
            return setTitle(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
}

export default PreMatchTitleInput;
