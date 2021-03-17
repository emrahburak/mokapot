import { gql } from '@apollo/client';


export const GET_POSTS = gql`
query{ 
	posts{ 
  	title
        id
        createdAt
        user{ 
        	username
           }
        }
 }
`;
