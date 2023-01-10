const prescribeNMetilGlucamine = async (nearInterface, weight) => (
  nearInterface.viewMethod(process.env.NMETIL_CONTRACT, 'get_dose', { weight })
);

const prescribeSodiumStibogluconate = async (nearInterface, weight) => (
  nearInterface.viewMethod(process.env.STIBOGLUCONATE_CONTRACT, 'get_dose', { weight })
);

export { prescribeNMetilGlucamine, prescribeSodiumStibogluconate };
