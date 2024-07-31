import conf from '../conf/conf';

import {Client, Account, ID} from "appwrite"

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId)
    }
}

const authservice = new AuthService();

export default authservice;

console.log("hello world!");