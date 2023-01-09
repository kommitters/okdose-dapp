const prescribeNMetilGlucamine = async (nearInterface, weight) => (
  nearInterface.viewMethod(process.env.CONTRACT_NAME, 'get_dose', { weight })
);

export { prescribeNMetilGlucamine };
