import conf from '../conf/conf';

import {Client, Account, ID} from "appwrite"

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectid);
            this.account = new Account(this.client);
    }
}

const authservice = new AuthService();

export default authservice;

