export type Sections =
  | "InitSection"
  | "CodeSection"
  | "MedSection"
  | "ModelingSection"
  | "XpSection"
  | "LangSection"
  | "MusicSection"
  | "WhySection"
  | "DesignSection";

export interface Data {
  section: Sections;
  scrollTo: boolean
  knowMeButtonClicked: boolean;
}

export interface GlobalContext {
  transversalData: Data;
  setTransversalData: (things: any) => void
}
