import type {IntroSectionsType} from '../../shared/types/before-match/IntroSectionType';

type IntroSectionsProps = {
  introType : IntroSectionsType[]
}

function HomeSection({introType} : IntroSectionsProps) {
  return (
    <>
      <div className="flex flex-row gap-8 justify-center self-center">
        {introType.map((ele, idx, arr) => {
          return <section className="border p-2 rounded-2xl w-1/4 h-40"></section>;
        })}
      </div>
    </>
  );
}

export default HomeSection;
