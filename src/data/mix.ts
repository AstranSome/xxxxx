import type { StaticImageData } from "next/image";
import photo from "./Mix/583084776_18089757286932393_6052590713325619127_n.jpg";
import clip1 from "./Mix/AQM1bj_PjJE9DmBE2Bg3hXT5WJRamzAPrZP6oP6OkEkvYMBk88tUE-A05cWxnfSEcfKq9kKbRh5pOUzLOmSaWuiUYF-c3vCfFgIPGEA.mp4";
import clip2 from "./Mix/AQNajXhZMkMo_wfo9qgS1hqLwE4AfoQRQHblQpFOnOtw3j05hZ0oz9GgguQM8A8RxCPqnQPUmxS2RNBdnrUOw8ZjvlYGft2ALazTSO8.mp4";
import clip3 from "./Mix/AQNnv9l49KgPQIt4W8ryTSnLJ_yRUsopmlk96AvQ4OoDy9SNiowymJewnykTZeW4h6WeuywGbgBQJiwXhtR_h9l84eJtoLA3DlMBEbM.mp4";
import clip4 from "./Mix/AQNubLRK4At2ADb1A_UU-ZcYFJN5XT8ZI05YtjDETFeReP8Ls3c-FrcisAMdth1vvT4yCU8ItBhsqtySZeNprLmBQyP-OFZXNX37_hk.mp4";
import clip5 from "./Mix/AQP3-Vy1T86yEd2uGWgNrIGl_XEMvWLCFqR8OWXHRL8_PMXFnuusPZnNJ3vFMz615fNxl34GioBdbq3XOZUxWcEzyshJ-2mrJFLrLZM.mp4";
import clip6 from "./Mix/AQPN8GRYFJhvzCdc4J4try_HSfRhyvB5SDbTcfifkRVtZi8zHM8hNkP4_-2WkuIFp-j1OOAbZoFtQzKvZo1O-gI16_cIbYuXbW9-B9c.mp4";

export type MixItem =
  | { id: string; type: "image"; src: StaticImageData; alt: string }
  | { id: string; type: "video"; src: string; alt: string };

export const mixMedia: MixItem[] = [
  {
    id: "community-photo",
    type: "image",
    src: photo,
    alt: "Masagran community moment",
  },
  {
    id: "reel-1",
    type: "video",
    src: clip1,
    alt: "Masagran reel",
  },
  {
    id: "reel-2",
    type: "video",
    src: clip2,
    alt: "Masagran reel",
  },
  {
    id: "reel-3",
    type: "video",
    src: clip3,
    alt: "Masagran reel",
  },
  {
    id: "reel-4",
    type: "video",
    src: clip4,
    alt: "Masagran reel",
  },
  {
    id: "reel-5",
    type: "video",
    src: clip5,
    alt: "Masagran reel",
  },
  {
    id: "reel-6",
    type: "video",
    src: clip6,
    alt: "Masagran reel",
  },
];
