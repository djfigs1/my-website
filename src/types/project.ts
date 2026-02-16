export type Link = {
  url: string;
  text: string;
};

export type Project = {
  title: string;
  description: string;
  thumbnail: ImageMetadata;
  link?: Link;
};
