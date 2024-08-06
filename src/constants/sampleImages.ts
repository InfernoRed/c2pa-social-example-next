export type SampleImage = {
  src: string;
  mimeType: string;
  alt: string;
};

const sampleImages: SampleImage[] = [
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/content-integrity/artistic-sample-nvIiE2H1YzYa56JEY6Wgh1ZYlqHdsh.jpeg",
    mimeType: "image/jpeg",
    alt: "A roaring fire",
  },
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/content-integrity/news-sample-8BhY9W8dBSgpOfcMaguxu6Thbb1Eju.jpg",
    mimeType: "image/jpeg",
    alt: "A smoking hillside",
  },
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/content-integrity/scientific-sample-Z0U7p2NrW6HAiJwXCq4FshX2ZhIRFy.jpg",
    mimeType: "image/jpeg",
    alt: "Charming penguins in Antarctica",
  },
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/public-testfiles/adobe-20220124-A-kObWHgPiRn4SCKyqsz0MWaQNqvGhcb.jpg",
    mimeType: "image/jpeg",
    alt: "Adobe Image 1",
  },
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/public-testfiles/adobe-20220124-C-lC8o7DkchbBv4Abc5MY3vsHCK01w8z.jpg",
    mimeType: "image/jpeg",
    alt: "Adobe Image 2",
  },
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/public-testfiles/adobe-20220124-CA-EmHkJl29oBXf9sgli0BWvqQatafAyE.jpg",
    mimeType: "image/jpeg",
    alt: "Adobe Image 3",
  },
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/public-testfiles/adobe-20220124-CACA-Hdbup8lRqINumBCkfSRHDQ1YsyFqfq.jpg",
    mimeType: "image/jpeg",
    alt: "Adobe Image 4",
  },
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/public-testfiles/adobe-20220124-CACAICAICICA-fTK5e3psg5ImXrNiGZ4z7f2PkUlYBD.jpg",
    mimeType: "image/jpeg",
    alt: "Adobe Image 5",
  },
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/public-testfiles/adobe-20221004-ukraine_building-xcoACgxD52hjRbGSzjys4QuVl8xVYa.jpeg",
    mimeType: "image/jpeg",
    alt: "Adobe Image 6",
  },
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/public-testfiles/truepic-20230212-camera-laYbFnzsSTobEFMjtB6oV2GSML1WrB.jpg",
    mimeType: "image/jpeg",
    alt: "Nikon Image 1",
  },
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/public-testfiles/truepic-20230212-camera-laYbFnzsSTobEFMjtB6oV2GSML1WrB.jpg",
    mimeType: "image/jpeg",
    alt: "Truepic Image 1",
  },
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/public-testfiles/truepic-20230212-landscape-N7T3c3xRtBO6YrJTbtrIlxBMC3rNOt.jpg",
    mimeType: "image/jpeg",
    alt: "Truepic Image 2",
  },
  {
    src: "https://vkddhsarc9pfntde.public.blob.vercel-storage.com/public-testfiles/truepic-20230212-library-Er7fQ11kpEVSUKNQCoEz1D7BacPCX2.jpg",
    mimeType: "image/jpeg",
    alt: "Truepic Image 3",
  },
] as const;

export default sampleImages;
