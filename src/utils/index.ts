import { DataProps } from "../types";

const getInitialValues = (data: Array<DataProps>) => {
  if (data?.length === 0) {
    throw Error("Please provide data");
  }
  return data.reduce(
    (a, v) => ({
      ...a,
      [v?.formProps.name]:
        v?.formProps?.value || v?.formProps?.defaultValue || "",
    }),
    {},
  );
};

export { getInitialValues };
