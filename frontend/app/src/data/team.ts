export interface TeamItem {
  _id: string;
  name: string;
  designation: string;
  photo?: string;
}

export const defaultTeam: TeamItem[] = [
  { _id: "1", name: "Aditya Sharma", designation: "Founder & CEO" },
  { _id: "2", name: "Priya Verma", designation: "Chief Operating Officer" },
  { _id: "3", name: "Rohan Mehta", designation: "Head of Engineering" },
  { _id: "4", name: "Neha Kapoor", designation: "Chief Financial Officer" },
];
