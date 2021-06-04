import { useRouter } from "next/router";

const CakeNumberPage = () => {
  const router = useRouter();

  let cakeNumber = router.query.cakeNumber;
  return <div>Cake Number: {cakeNumber}</div>;
};

export default CakeNumberPage;
