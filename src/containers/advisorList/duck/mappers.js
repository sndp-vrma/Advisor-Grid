export const advisorListMapper = ({ results }) => {
  return results.map(({ name }) => {
    return name;
  });
};
