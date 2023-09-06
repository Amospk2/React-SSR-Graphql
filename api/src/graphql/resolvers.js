import { mergeResolvers } from "@graphql-tools/merge";
const path = require('path')
import { loadFilesSync } from "@graphql-tools/load-files"
 
const typesArray = loadFilesSync(
    path.join(__dirname, 'modules'), 
    {extensions: ['.js'], 
    recursive: true}
)
 
export default mergeResolvers(typesArray)