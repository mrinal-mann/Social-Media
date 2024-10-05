import { graphql } from "../../ggl";

export const verifyUserGoofleTokenQuery = graphql(`#graphql
query VerifyUserGoogleToken($token: String!){
    verifyGoogleToken(token: $token)
}
`)
