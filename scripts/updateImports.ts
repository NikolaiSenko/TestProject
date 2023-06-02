import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const sourceFiles = project.getSourceFiles()

const isAbsolute = (value: string) => {
  const layers = ['app', 'entities', 'features', 'widgets', 'shared', 'pages']
  return layers.some((layer) => value.startsWith(layer))
}

sourceFiles.forEach((file) => {
  const importsDeclarations = file.getImportDeclarations()
  importsDeclarations.forEach((importDeclaration) => {
    const importValue = importDeclaration.getModuleSpecifierValue()
    if (isAbsolute(importValue)) {
      importDeclaration.setModuleSpecifier(`@/${importValue}`)
    }
  })
})

project.save()
