function getLoc() {
    return fetch("http://localhost:8080/api/properties", {
        method: "GET", 
    }).then((res) => res.json());
}

const Api = {
    getLoc,
};

export default Api;

