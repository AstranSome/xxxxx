import hero from "./AQNqvamLfOzTOx7aaz8FwZqXKbuEz7joBERlkY_blC3qqMa7PPFr1o0ZX1p0mnP8hAemXNJgbzAeCTnPQiiCc2JxxnF3ZEf7QyLM5es.mp4";
import space from "./AQO96UjPyhUb3fkeR5MXVgiIXvr1UznEf835knfaK0Z_SXeVAjZaT5WH4dvr_SPPNXjEOm3uwDEk-5cP6hnRrnIvWhCC_tv24eQJ39c.mp4";
import culture from "./AQOKMWEvvxUWsW4UvtmMjpmgQwhBWoA7VCOMCiCOhIgfgpqQFI-LlFYcqOfuWVseR7ccBZT1UD7TwKIFzIuwhrjXNHxKtIFsfn3Kbjk.mp4";

export const videos = {
  /** Full-viewport hero loop */
  hero,
  /** Ambient interior — space teaser & reservations background */
  space,
  /** Culture page reel */
  culture,
} as const;

export type VideoKey = keyof typeof videos;
