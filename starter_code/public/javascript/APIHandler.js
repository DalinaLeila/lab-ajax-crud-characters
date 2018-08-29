class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get("http://localhost:8000/characters")
      .then(result => {
        // console.log(result.data);
        return result.data;
      })
      .catch(console.error);
  }

  getOneRegister(id) {
    return axios
      .get(`http://localhost:8000/characters/${id}`)
      .then(result => {
        // console.log(result.data);
        return result.data;
      })
      .catch(console.error);
  }

  deleteOneRegister(id) {
    return axios
      .delete(`http://localhost:8000/characters/${id}`)
      .then(result => {
        // console.log(result.data);
        return result.data;
      })
      .catch(console.error);
  }

  createOneRegister(createInfo) {
    axios
      .post(`http://localhost:8000/characters`, createInfo)
      .then(result => {
        console.log(result.data);
      })
      .catch(console.error);
  }

  updateOneRegister(id, info) {
    return axios
      .patch(`http://localhost:8000/characters/${id}`, info)
      .then(result => {
        console.log(result.data);
        return result.data;
      })
      .catch(console.error);
  }
}
