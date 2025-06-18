import Image from "next/image";

import CreatorInfo from "@/screens/nft-card/ui/creator-info";
import { iconClock, iconEthereum, imageEquilibrium } from "@/shared/assets";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/shared/ui/card";

const PriceInfo = ({ price }: { price: number }) => {
  return (
    <div className="flex items-center space-x-100">
      <Image
        alt="ethereum icon"
        src={iconEthereum.src}
        width={11}
        height={18}
        className="h-auto w-auto"
      />
      {/* Price */}
      <p className="typo-3-semibold text-cyan-400">{price}ETH</p>
    </div>
  );
};
const DateInfo = ({ lastUpdatedDate }: { lastUpdatedDate: number }) => {
  return (
    <div className="flex items-center space-x-100">
      <Image
        alt="clock icon"
        src={iconClock.src}
        width={13}
        height={13}
        className="h-auto w-auto"
      />
      <p className="typo-3-regular text-blue-500">{lastUpdatedDate}days left</p>
    </div>
  );
};

const NftCardContent = (props: NftCardProps) => {
  const { description, title, price, lastUpdatedDate, userName } = { ...props };
  return (
    <CardContent>
      <div className="space-y-300">
        {/* Text Area */}
        <div className="space-y-200">
          <CardTitle className="typo-1 text-white">{title}</CardTitle>
          <CardDescription className="typo-2 text-blue-500">
            {description}
          </CardDescription>
        </div>
        {/* Price Area */}
        <div className="flex justify-between">
          <PriceInfo price={price} />
          <DateInfo lastUpdatedDate={lastUpdatedDate} />
        </div>
      </div>
      {/* Line Area */}
      <hr className="my-300 border-blue-800" />
      <CreatorInfo userName={userName} />
    </CardContent>
  );
};

type NftCardProps = {
  title: string;
  userName: string;
  description: string;
  price: number;
  lastUpdatedDate: number;
};
const NftCard = (props: NftCardProps) => {
  const { title } = { ...props };
  return (
    <Card className="mx-auto max-w-[350px] space-y-300 bg-blue-900 p-300">
      <Image
        alt={`${title} image`}
        src={imageEquilibrium.src}
        width={100}
        height={100}
        className="w-auto rounded-[8px]"
      />
      <NftCardContent {...props} />
    </Card>
  );
};

export default NftCard;
