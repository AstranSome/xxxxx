import reel1 from "./drinks/AQNBY4tDcFNhix5icMoqTXOr9i3qFlMxfq5-pI6S7Sgrj-vVi87upiuKMHaU-9tUwqY2vRTa_RkDleyTQZAhSIpdfBd-z-4R-9LbnUQ.mp4";
import reel2 from "./drinks/StorySaver.net-masagran.dz-Video-1782683784536.mp4";
import reel3 from "./drinks/StorySaver.net-masagran.dz-Video-1782683796416.mp4";
import reel4 from "./drinks/StorySaver.net-masagran.dz-Video-1782683811083.mp4";
import reel5 from "./drinks/StorySaver.net-masagran.dz-Video-1782683820001.mp4";
import reel6 from "./drinks/StorySaver.net-masagran.dz-Video-1782683837856.mp4";

export type DrinkMedia = {
  id: string;
  type: "video";
  src: string;
  label: string;
};

export const drinksMedia: DrinkMedia[] = [
  { id: "drink-reel-1", type: "video", src: reel1, label: "Iced pour" },
  { id: "drink-reel-2", type: "video", src: reel2, label: "Cold edition" },
  { id: "drink-reel-3", type: "video", src: reel3, label: "Bar craft" },
  { id: "drink-reel-4", type: "video", src: reel4, label: "Espresso ritual" },
  { id: "drink-reel-5", type: "video", src: reel5, label: "Social column" },
  { id: "drink-reel-6", type: "video", src: reel6, label: "Signature sip" },
];
