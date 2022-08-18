"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { NODE_ENV, DATABASE, USER, HOST, DATABASE_PORT, POSTGRES_TEST_DB, PASSWORD, DATABASE_URL, } = process.env;
let client;
if (NODE_ENV === 'production') {
    const connectionString = DATABASE_URL;
    client = new pg_1.Pool({
        connectionString,
        ssl: {
            rejectUnauthorized: false,
        },
    });
}
else if (NODE_ENV === 'development') {
    client = new pg_1.Pool({
        host: HOST,
        user: USER,
        database: DATABASE,
        password: PASSWORD,
        port: parseInt(DATABASE_PORT, 10),
    });
}
else {
    client = new pg_1.Pool({
        host: HOST,
        user: USER,
        database: POSTGRES_TEST_DB,
        password: PASSWORD,
        port: parseInt(DATABASE_PORT, 10),
    });
}
// Listen for server connections
exports.default = {
    client,
    DATABASE,
    USER,
    HOST,
    DATABASE_PORT,
    POSTGRES_TEST_DB,
    PASSWORD,
};
