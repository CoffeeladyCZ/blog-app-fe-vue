import { IArticleDetail } from "./types";

export const mockData: IArticleDetail[] = [
  {
    title: 'Article Title',
    subtitle: 'Article Subtitle',
    version: 'v1',
    content:
      '_Lorem ipsum dolor sit amet_, consectetur adipiscing elit. **Sed** faucibus, nunc id lacinia aliquet, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc. [SIGN UP for Blinkist](odkaz)', 
    image: 'https://primefaces.org/cdn/primevue/images/usercard.png'
  },
  {
    title: 'Article Title 2',
    subtitle: 'Article Subtitle',
    version: 'v2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, nunc id lacinia aliquet, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc. [SIGN UP for Blinkist](odkaz)', 
    image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];