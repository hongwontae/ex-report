import IntroButton from "../../components/intro/IntroButton";
import IntroSection from '../../components/intro/IntroSection';

function IntroPage() {
  return (  
    <>
      <div className='grid grid-rows-[2fr_1fr_3fr] h-screen p-8'>
        <div className="text-center text-6xl self-center">EX-REPORT</div>
        <IntroButton></IntroButton>
        <IntroSection></IntroSection>
      </div>
    </>
  );
}

export default IntroPage;
