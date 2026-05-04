import {describe, expect, test} from "vitest";
// import { getAPIKey } from "./api/auth";
// import { IncomingHttpHeaders } from "http";
// import { MySqlDateTimeString } from "drizzle-orm/mysql-core";    

const headers = {
    "authorization" : "a four word string",
};
    
describe("headers", () => {
    test("testing authorization values", () => {
        expect(headers["authorization"]).toBe("a four word string")
    });
    
    test("testing split auth", () => {
        //const ApiKey = getAPIKey(headers);
        const splitheaders = headers.authorization.split(" ")
        expect(splitheaders[1]).toBe("four");
        
    });
});


