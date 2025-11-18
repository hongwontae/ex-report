const testSections = [
  { id: 1, text: "PPPPP" },
  { id: 2, text: "PPPPP" },
  { id: 3, text: "PPPPP" },
  { id: 4, text: "PPPPP" },
];

function HomeSection() {
  return (
    <>
      <div className="flex flex-row gap-8 justify-center self-center">
        {testSections.map(({ id, text }, idx, arr) => {
          return <section className="border-1 p-2 rounded-2xl w-1/4 h-[10rem]" key={id}>{text}</section>;
        })}
      </div>
    </>
  );
}

export default HomeSection;
