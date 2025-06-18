import NftCard from "../nft-card";

const NftPreviewCardPage = () => {
  // ここでデータを取得する想定
  const userName = "Jules Wyvern";
  const title = "Equilibrium #3429";
  const description = "Our Equilibrium collection promotes balance and calm.";
  const price = 0.041;
  const lastUpdatedDate = 3;
  return (
    <div className="flex min-h-screen items-center">
      <NftCard
        title={title}
        description={description}
        price={price}
        lastUpdatedDate={lastUpdatedDate}
        userName={userName}
      />
    </div>
  );
};

export default NftPreviewCardPage;
