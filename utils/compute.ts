
import axios from 'axios'

let data = {
    "Engine": "Docker",
    "Docker": {
        "Image": "ubuntu",
        "Entrypoint": ["echo"],
        "Parameters": ["hello"]
    },
    "Deal": {
        "Concurrency": 1
    },
    "Verifier": "Noop",
    "PublisherSpec": {
        "Type": "IPFS"
    }
};



axios.post('http://dashboard.bacalhau.org:1000/api/v1/run', data)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
