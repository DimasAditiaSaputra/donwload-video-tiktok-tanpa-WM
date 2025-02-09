import Tiktok from "@tobyg74/tiktok-api-dl";

export const donwload = async (req, res) => {
  const { url } = req.body;
  {
    const tiktok_url = url;

    try {
      const downloader = await Tiktok.Downloader(tiktok_url, {
        version: "v2", //  version: "v1" | "v2" | "v3"
        //   proxy: "http", // Support Proxy Http, Https, Socks5
        showOriginalResponse: true, // Only for V1
      });

      return res.status(200).json({ result: downloader });
    } catch (err) {
      console.log(err.message);
    }
  }
};
