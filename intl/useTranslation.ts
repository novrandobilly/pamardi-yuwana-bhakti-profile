import { useContext, useMemo } from 'react';
import { langType, LanguageContext } from './LanguageProvider';
import { LangStrings } from './LanguageStrings';

type TranslateType = () => [
  (text: string) => string,
  langType,
  (lang: langType) => void
];

const useTranslation: TranslateType = () => {
  const language = useContext(LanguageContext).lang;
  const updateLang = useContext(LanguageContext).updateLang;
  const defaultLang = 'id';

  const translate = (text: string) => {
    if (!LangStrings[language][text]) {
      console.log(`No section ${text} in ${language}`);
    }

    return LangStrings[language][text] || LangStrings[defaultLang][text] || '';
  };

  return [translate, language, updateLang];
};

export default useTranslation;
