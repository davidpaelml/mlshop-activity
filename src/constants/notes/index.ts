import { DescriptionProps } from "@/interfaces";

type NoteProps = {
  tagname: string;
  description?: DescriptionProps;
};

const notes: NoteProps[] = [
  { tagname: "Header" },
  { tagname: "Profile" },
  { tagname: "Login" },
  { tagname: "HINT" },
];

export default notes;
