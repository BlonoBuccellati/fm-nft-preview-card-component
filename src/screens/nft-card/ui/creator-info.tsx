import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import { ImageAvatar } from "@/shared/assets";
import { Avatar } from "@/shared/ui/avatar";

type CreatorField = {
  userName: string;
};
const CreatorInfo = ({ userName }: CreatorField) => {
  return (
    <div className="flex items-center space-x-200">
      <Avatar>
        <AvatarImage src={ImageAvatar.src} alt="user avatar" />
        <AvatarFallback>{userName}</AvatarFallback>
      </Avatar>
      {/* user name */}
      <p className="typo-3-regular flex space-x-100 text-blue-500">
        <span>Creation of</span>
        <span className="text-white group-active:text-cyan-400">
          {userName}
        </span>
      </p>
    </div>
  );
};

export default CreatorInfo;
