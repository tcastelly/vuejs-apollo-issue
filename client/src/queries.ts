import gql from 'graphql-tag';

export const GET_YEAR = gql`
    query getYear {
        getYear 
    }
`;

export const HELLO = gql`
    query hello($yr: Int!) {
        hello(yr: $yr)
    }
`;
