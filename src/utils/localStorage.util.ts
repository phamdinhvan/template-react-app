export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("example-token", serializedState);
  } catch (error) {
    console.log(error);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("example-token");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};
