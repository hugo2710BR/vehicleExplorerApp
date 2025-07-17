export const useFetchVehicleData = async () => {
  const response = await fetch(
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20"
  );

  if (!response.ok) {
    throw new Error(`Erro: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
