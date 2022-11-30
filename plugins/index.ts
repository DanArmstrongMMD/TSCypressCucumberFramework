import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
export default (on, config) => {
  on('file:preprocessor', createBundler())
}