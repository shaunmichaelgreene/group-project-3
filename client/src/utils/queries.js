import {gql} from '@apollo/client';


export const SEARCH = gql`
    query search($search: String!) {
        search(search: $search)
    }
`