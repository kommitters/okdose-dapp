import React from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();

  return (
    <main>
      <p>{ t('leishmaniasis.n_metil_glucamine.name') }</p>
    </main>
  );
}
