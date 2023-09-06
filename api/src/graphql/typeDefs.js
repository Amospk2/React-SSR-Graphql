import { mergeTypeDefs } from "@graphql-tools/merge";
const path = require('path')
import { loadFilesSync } from "@graphql-tools/load-files"
 
const typesArray = loadFilesSync(
    path.join(__dirname, 'modules'), 
    {extensions: ['.gql'], 
    recursive: true}
)
 
export default mergeTypeDefs(typesArray)