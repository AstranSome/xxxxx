import type { StaticImageData } from "next/image";
import photo from "./sweets/475531954_17894870784156963_221901545751781264_n.jpg";
import reel1 from "./sweets/AQMbCkZCnfMVkZaaIfLGcQ6MkGx-OdIokXWUc8xdoMtQXAG3zH3GcALQqjSI_Pw8XcO44nC3ai5vB7hAcjj_mF6jLp9uSpE6YszuBxk.mp4";
import reel2 from "./sweets/AQMOgsKwb3TnvmRipeokSU79La6or_V9CU3uf-4r1DqDvo_PttBoUPIFS4F2w2e3-vwJwJCfHg6KCCiUGxMumFYOiMj9UIAqK-fzDHc.mp4";
import reel3 from "./sweets/AQNAE90wmsbP1VLBe9Q7S45ViZPw-cJPURJ9qaI_vQ-gU3g7CNikRsm6q5zWSawP8ZpCobzbWZcGgqtlP0v4ba7C4rA1mDUl27P4FQU.mp4";
import reel4 from "./sweets/StorySaver.net-masagran.dz-Video-1782683211158.mp4";
import reel5 from "./sweets/StorySaver.net-masagran.dz-Video-1782683233590.mp4";
import reel6 from "./sweets/StorySaver.net-masagran.dz-Video-1782683241045.mp4";

export type SweetMedia =
  | { id: string; type: "image"; src: StaticImageData; label: string }
  | { id: string; type: "video"; src: string; label: string };

export const sweetsMedia: SweetMedia[] = [
  {
    id: "sweet-closeup",
    type: "image",
    src: photo,
    label: "Sweetest details",
  },
  {
    id: "sweet-reel-1",
    type: "video",
    src: reel1,
    label: "From the oven",
  },
  {
    id: "sweet-reel-2",
    type: "video",
    src: reel2,
    label: "Fresh pastry",
  },
  {
    id: "sweet-reel-3",
    type: "video",
    src: reel3,
    label: "Sweet mood",
  },
  {
    id: "sweet-reel-4",
    type: "video",
    src: reel4,
    label: "Bakery reel",
  },
  {
    id: "sweet-reel-5",
    type: "video",
    src: reel5,
    label: "Dessert moment",
  },
  {
    id: "sweet-reel-6",
    type: "video",
    src: reel6,
    label: "Indulgence",
  },
];
