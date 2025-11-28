import { useQuery } from "@tanstack/react-query";
import IntroButton from "../../components/intro/IntroButton";
import IntroSection from '../../components/intro/IntroSection';
import {preMatchIntroShowHttp} from '../../api/before-match/pre-match-intro-show-api';
import type { IntroSectionsType } from "../../shared/types/before-match/IntroSectionType";

function IntroPage() {

  const {data, isPending, isError} = useQuery<IntroSectionsType[], Error>({
    queryKey : ['none'],
    queryFn : preMatchIntroShowHttp
  })

  if (isError){return <p>Error!!</p>}
  if (isPending) {return <p>Wait...</p>}

  return (  
    <>
      <div className='grid grid-rows-[2fr_1fr_3fr] h-screen p-8'>
        <div className="text-center text-6xl self-center">EX-REPORT</div>
        <IntroButton></IntroButton>
        <IntroSection introType={data ?? []}></IntroSection>
      </div>
    </>
  );
}

export default IntroPage;
