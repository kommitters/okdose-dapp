import React from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();

  return (
    <main>
      <p>{ t('leishmaniasis.types.cl_treatment_time') }</p>
    </main>
  );
}
