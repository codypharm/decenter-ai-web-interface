
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


const BACALHAU_API = 'http://dashboard.bacalhau.org:1000/api/v1/run'

export async function compute(train_script:string,cid:string): Promise<string>{
    let dto = {
        "Engine": "Docker",
        "Docker": {
            "Image": "ghcr.io/decenter-ai/compute:v1.5.5",
            "Parameters": [
                train_script, //headbrain.ipynb
                `/inputs/${cid}`
            ],
        },
        "inputs": [
            {
                "StorageSource": "urlDownload",
                "Name": `https://gateway.lighthouse.storage/ipfs/${cid}`,
                "URL": `https://gateway.lighthouse.storage/ipfs/${cid}`,
                "Path": "/inputs"
            }
        ],
        "outputs": [
            {
                "Name": "outputs",
                "StorageSource": "IPFS",
                "path": "/outputs"
            }
        ],
        "Deal": {
            "Concurrency": 1
        },
        "Verifier": "Noop",
        "PublisherSpec": {
            "Type": "IPFS"
        },
        'Resources': {'CPU': '1', 'GPU': '1', 'MEMORY': '1Gb'},
    }

    const res = await axios.post(BACALHAU_API, dto)
//     most likely gives a status of 200 even for errors.
    console.log({
        resStatus: res.status,
        data: res.data
    })
    // output IPFS CID: is reliable for 1st 5-10 minutes
    return res.data['cid']
}




async function main(){
    const sample = {
        train_script: "headbrain.ipynb",
        cid: "Qme1HnwLHVzRxra7mT5gRkG7WbyE4FhnGFn9inETSj33Hw",
    }

    await compute(sample.train_script, sample.cid)
}



// main()

/*
axios.post('http://dashboard.bacalhau.org:1000/api/v1/run', data)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
*/
