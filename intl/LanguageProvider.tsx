import React, { createContext, useState } from 'react';

export type langType = 'id' | 'en';

interface LanguageObjectType {
  lang: langType;
  updateLang: (lang: langType) => void;
}

export const LanguageContext = createContext<LanguageObjectType>({
  lang: 'id',
  updateLang: (lang: string) => {},
});

export const LanguageContextProvider: React.FC = (props) => {
  const [language, setLanguage] = useState<langType>('id');

  const updateLanguage = (lang: langType) => {
    setLanguage(lang);
  };

  const contextValue: LanguageObjectType = {
    lang: language,
    updateLang: updateLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {props.children}
    </LanguageContext.Provider>
  );
};
