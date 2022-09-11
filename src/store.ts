import { defineStore, acceptHMRUpdate } from "pinia";

interface ICodeshotState {
  backgroundColor: string | undefined;
  shadow: boolean;
  padding: number;
  language: string;
}

export const useCodeshotStore = defineStore("codeshot", {
  state: (): ICodeshotState => ({
    backgroundColor: undefined,
    shadow: false,
    padding: 16,
    language: "swift",
  }),

  actions: {
    setBackgroundColor(backgroundColor?: string) {
      this.backgroundColor = backgroundColor;
    },
    showShadow(show: boolean) {
      this.shadow = show;
    },
    setPadding(value: number) {
      this.padding = value;
    },
    setLanguage(value: string) {
      this.language = value;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCodeshotStore, import.meta.hot));
}
