
export const getDataResult = async id => {

  return {
    x: 'lorem ipsum',
  };
};

export const uploadData = async file => {
  const formData = new FormData();
  formData.append('file', file);

  return { id: '1234' };
};
