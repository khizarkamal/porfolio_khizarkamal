export type NavItem = {
  id: string;
  text: string;
  link: string;
};

export type SocialLink = {
  id: string;
  icon: string;
  link: string;
};

export type TechStack = {
  image: string;
};

export type Project = {
  image: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  siteUrl: string;
  githubLink: string;
};

export type SectionHeadingProps = {
  title: string;
  subTitle: string;
};

export type Experience = {
  company: string;
  designation: string;
  startDate: string;
  endDate: string;
  jobType: string;
};
