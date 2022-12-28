import React from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();

  return (
    <main>
      <p>{ t('okdose.description') }</p>
    </main>
  );
}
