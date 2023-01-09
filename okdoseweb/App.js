import React from 'react';
import { useTranslation } from 'react-i18next';
import { NearInterface } from '../okdose/near/near-interface';
import { prescribeNMetilGlucamine } from '../okdose/transmissionTypes/transmittedByVectors/leishmaniasis';

export default function App({ wallet }) {
  const { t } = useTranslation();
  const nearInterface = new NearInterface({ walletToUse: wallet });

  const [valueFromBlockchain, setValueFromBlockchain] = React.useState({});

  React.useEffect(() => {
    prescribeNMetilGlucamine(nearInterface, 50)
      .then(setValueFromBlockchain)
      .catch(alert);
  }, []);

  return (
    <main>
      <p>{ t('leishmaniasis.name') }</p>
      <p>{ t(valueFromBlockchain.volumeDose) }</p>
    </main>
  );
}
