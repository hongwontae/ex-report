export const preMatchIntroShowHttp = async () => {
  const response = await fetch("http://localhost:3000/pre-match/intro/show?num=4", {
    method: "GET",
  });

  if(!response.ok){
    throw new Error('intro data fetch failed');
  }

  const resData = await response.json();
  return resData;

};
