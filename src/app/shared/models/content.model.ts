export class ContentModel {
  title: string;
  content: {
    subtitle: string;
    isopen: boolean;
    paragraphs: { text: string }[];
  }[];
}
