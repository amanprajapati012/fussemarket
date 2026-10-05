export interface ClientItem {
  _id: string;
  name: string;
  logo: string;
}

// Replace `logo` with real image links once you have them —
// keep the same field names and everything else keeps working.
export const defaultClients: ClientItem[] = [
  { _id: "1", name: "Aakar", logo: "" },
  { _id: "2", name: "Novartis", logo: "" },
  { _id: "3", name: "KPMG", logo: "" },
  { _id: "4", name: "BBC", logo: "" },
  { _id: "5", name: "Fortinet", logo: "" },
  { _id: "6", name: "Protiviti", logo: "" },
];
