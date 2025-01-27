import { makeEmbed } from "../base";
import { FileBasedStream } from "@movie-web/providers";

export const embedProvider = makeEmbed({
  id: "autoembed-french",
  name: "AutoEmbed French",
  rank: 5,
  async scrape(ctx) {
    const stream: FileBasedStream = {
      type: "file",
      id: "french-stream",
      flags: [],
      captions: [],
      qualities: {
        "1080": {
          type: "mp4",
          url: ctx.url,
        },
      },
    };

    return {
      stream: [stream],
      urls: [],
    };
  },
});
